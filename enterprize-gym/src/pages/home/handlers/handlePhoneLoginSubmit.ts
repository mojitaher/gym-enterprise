import type { FormEvent, RefObject } from "react";

export const handlePhoneLoginSubmit = (
  event: FormEvent<HTMLFormElement>,
  ref: RefObject<HTMLInputElement | null>,
  onSubmit: (phone: string) => void
) => {
  event.preventDefault();

  const phone = ref.current?.value;

  if (!phone) return;

  onSubmit(phone);
};