import { useMutation } from "@tanstack/react-query";

import { updateOwner } from "../api/signupApi";

export function useUpdateOwner() {
  return useMutation({
    mutationFn: ({
      registrationId,
      body,
    }: {
      registrationId: string;
      body: Parameters<typeof updateOwner>[1];
    }) => updateOwner(registrationId, body),
  });
}