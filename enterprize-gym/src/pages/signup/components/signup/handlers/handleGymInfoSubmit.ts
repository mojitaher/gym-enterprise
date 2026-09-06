import type { FormEvent, RefObject } from "react";
import type { GymInfoFormData } from "../interfaces/gymInfoStepProps.interface";

export const handleGymInfoSubmit = (
  event: FormEvent<HTMLFormElement>,
  nameRef: RefObject<HTMLInputElement | null>,
  phoneRef: RefObject<HTMLInputElement | null>,
  addressRef: RefObject<HTMLInputElement | null>,
  typeRef: RefObject<HTMLInputElement | null>,
  onSubmit: (data: GymInfoFormData) => void
) => {
  event.preventDefault();

  const name = nameRef.current?.value;
  const phone = phoneRef.current?.value;
  const address = addressRef.current?.value;
  const type=typeRef.current?.value;

  if (!name || !phone ||!address|| !type) return;

  onSubmit({ name, phone, address,type });
};