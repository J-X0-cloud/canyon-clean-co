"use client";

import { useCallback, useState } from "react";
import type { QuoteBreakdown } from "@/types/quote";

export type FieldErrors = Partial<Record<string, string[]>>;

type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "sent"; id: string; quote: QuoteBreakdown }
  | { status: "error"; message: string; fields: FieldErrors };

interface QuoteResponse {
  id?: string;
  quote?: QuoteBreakdown;
  error?: string;
  fields?: FieldErrors;
}

export function useQuoteSubmission() {
  const [state, setState] = useState<SubmissionState>({ status: "idle" });

  const submit = useCallback(async (payload: Record<string, unknown>) => {
    setState({ status: "submitting" });
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as QuoteResponse;

      if (response.ok && data.id && data.quote) {
        setState({ status: "sent", id: data.id, quote: data.quote });
        return true;
      }
      setState({
        status: "error",
        message: data.error ?? "Something went wrong. Please try again.",
        fields: data.fields ?? {},
      });
    } catch {
      setState({
        status: "error",
        message: "We couldn’t reach the server. Check your connection and try again.",
        fields: {},
      });
    }
    return false;
  }, []);

  const fieldErrors = state.status === "error" ? state.fields : {};

  return { state, submit, fieldErrors };
}
