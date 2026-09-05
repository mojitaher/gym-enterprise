import type { FormEvent, RefObject } from "react";
import type { ManagerInfoFormData } from "../../../interfaces/managerInfoStepProps.interface";

export const handleManagerInfoSubmit = (
  event: FormEvent<HTMLFormElement>,
  firstNameRef: RefObject<HTMLInputElement | null>,
  lastNameRef: RefObject<HTMLInputElement | null>,
  phoneRef: RefObject<HTMLInputElement | null>,
  emailRef: RefObject<HTMLInputElement | null>,
  onSubmit: (data: ManagerInfoFormData) => void
) => {
  event.preventDefault();

  const firstName = firstNameRef.current?.value;
  const lastName = lastNameRef.current?.value;
  const phone = phoneRef.current?.value;
  const email = emailRef.current?.value;

  if (!firstName || !lastName || !phone || !email) return;

  onSubmit({ firstName, lastName, phone, email });
};