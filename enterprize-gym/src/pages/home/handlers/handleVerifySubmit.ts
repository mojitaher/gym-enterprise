import type { FormEvent, RefObject } from "react";

export const handleVerifySubmit = (
  event: FormEvent<HTMLFormElement>,
  ref: RefObject<HTMLInputElement | null>,
  onSubmit: (code: string) => void
) => {
  event.preventDefault();

  const code = ref.current?.value;

  if (!code) return;

  onSubmit(code);
};