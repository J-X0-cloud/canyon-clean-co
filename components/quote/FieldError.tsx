export function FieldError({ id, messages }: { id: string; messages?: string[] }) {
  if (!messages?.length) return null;
  return (
    <small className="field-error" id={id} role="alert">
      {messages[0]}
    </small>
  );
}
