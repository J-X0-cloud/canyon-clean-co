import { randomUUID } from "node:crypto";
import type { QuoteRequest } from "@/lib/quote-schema";
import type { CoverageResult } from "@/lib/coverage";
import type { QuoteBreakdown } from "@/types/quote";

export interface Lead {
  id: string;
  createdAt: string;
  request: QuoteRequest;
  quote: QuoteBreakdown;
  coverage: CoverageResult;
}

/** Where incoming quote requests are delivered. */
export interface LeadSink {
  deliver(lead: Lead): Promise<void>;
}

/** Posts the lead as JSON to a CRM or automation webhook. */
class WebhookLeadSink implements LeadSink {
  constructor(
    private readonly url: string,
    private readonly secret?: string,
  ) {}

  async deliver(lead: Lead): Promise<void> {
    const response = await fetch(this.url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(this.secret ? { authorization: `Bearer ${this.secret}` } : {}),
      },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8_000),
    });

    if (!response.ok) {
      throw new Error(`Lead webhook responded with ${response.status}`);
    }
  }
}

/** Development fallback: keeps leads visible in the server log. */
class ConsoleLeadSink implements LeadSink {
  async deliver(lead: Lead): Promise<void> {
    console.info("[lead]", lead.id, {
      name: lead.request.name,
      type: lead.quote.type,
      total: lead.quote.total,
      zip: lead.request.zip,
      served: lead.coverage.served,
    });
  }
}

export function getLeadSink(): LeadSink {
  const url = process.env.LEAD_WEBHOOK_URL;
  return url ? new WebhookLeadSink(url, process.env.LEAD_WEBHOOK_SECRET) : new ConsoleLeadSink();
}

export function createLead(
  request: QuoteRequest,
  quote: QuoteBreakdown,
  coverage: CoverageResult,
): Lead {
  return {
    id: `cc_${randomUUID().slice(0, 8)}`,
    createdAt: new Date().toISOString(),
    request,
    quote,
    coverage,
  };
}
