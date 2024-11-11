import { NextResponse } from "next/server";
import { z } from "zod";
import { checkCoverage } from "@/lib/coverage";
import { createLead, getLeadSink } from "@/lib/leads";
import { calculateQuote } from "@/lib/pricing";
import { quoteRequestSchema } from "@/lib/quote-schema";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Request body must be JSON" }, { status: 400 });
  }

  const parsed = quoteRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the highlighted fields",
        fields: z.flattenError(parsed.error).fieldErrors,
      },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Never trust a client-side total: re-price the request on the server.
  const quote = calculateQuote({
    type: data.type,
    beds: data.beds,
    baths: data.baths,
    frequency: data.frequency,
    addOns: data.addOns,
    pets: data.pets,
  });
  const coverage = checkCoverage(data.zip);
  const lead = createLead(data, quote, coverage);

  try {
    await getLeadSink().deliver(lead);
  } catch (error) {
    console.error("[quote] lead delivery failed", lead.id, error);
    return NextResponse.json(
      { error: `We couldn’t send your request. Please call ${site.phone}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ id: lead.id, quote, coverage }, { status: 201 });
}
