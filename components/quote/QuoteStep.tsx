import type { ReactNode } from "react";

interface QuoteStepProps {
  step: number;
  title: string;
  id?: string;
  disabled?: boolean;
  children: ReactNode;
}

export function QuoteStep({ step, title, id, disabled, children }: QuoteStepProps) {
  return (
    <fieldset className="qstep" id={id} disabled={disabled}>
      <legend>
        <span>{step}</span>
        {title}
      </legend>
      {children}
    </fieldset>
  );
}
