import { useMutation } from "@tanstack/react-query";

import { registerGym } from "../api/signupApi";

export function useRegisterGym() {
  return useMutation({
    mutationFn: ({
      registrationId,
      body,
    }: {
      registrationId: string;
      body: Parameters<typeof registerGym>[1];
    }) => registerGym(registrationId, body),
  });
}