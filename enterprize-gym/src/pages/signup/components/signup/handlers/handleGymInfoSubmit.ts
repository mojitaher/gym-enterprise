import type { FormEvent, RefObject } from "react";
import type { GymInfoFormData } from "../../../interfaces/gymInfoStepProps.interface";

export const handleGymInfoSubmit = (
  event: FormEvent<HTMLFormElement>,
  nameRef: RefObject<HTMLInputElement | null>,
  phoneRef: RefObject<HTMLInputElement | null>,
  passwordRef: RefObject<HTMLInputElement | null>,
  onSubmit: (data: GymInfoFormData) => void
) => {
  event.preventDefault();

  const name = nameRef.current?.value;
  const phone = phoneRef.current?.value;
  const password = passwordRef.current?.value;

  if (!name || !phone || !password) return;

  onSubmit({ name, phone, password });
};