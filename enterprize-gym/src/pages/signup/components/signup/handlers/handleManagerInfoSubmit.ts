import type { FormEvent, RefObject } from "react";
import type { ManagerInfoFormData } from "../interfaces/managerInfoStepProps.interface";

export const handleManagerInfoSubmit = (
  event: FormEvent<HTMLFormElement>,
  fullNameRef: RefObject<HTMLInputElement | null>,
  phoneRef: RefObject<HTMLInputElement | null>,
  passRef: RefObject<HTMLInputElement | null>,
  confirmPassRef: RefObject<HTMLInputElement | null>,
  onSubmit: (data: ManagerInfoFormData) => void
) => {
  event.preventDefault();

  const fullName = fullNameRef.current?.value;
  const phone = phoneRef.current?.value;
  const pass = passRef.current?.value;
  const confirmPass = confirmPassRef.current?.value;

  if (!fullName || !phone || !pass || !confirmPass) return;

  onSubmit({ fullName, phone, pass, confirmPass });
};