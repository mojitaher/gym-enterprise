import { useMutation } from "@tanstack/react-query";

import { submitPlan } from "../api/signupApi";

export function useSubmitPlan() {
  return useMutation({
    mutationFn: ({
      registrationId,
      body,
    }: {
      registrationId: string;
      body: Parameters<typeof submitPlan>[1];
    }) => submitPlan(registrationId, body),
  });
}