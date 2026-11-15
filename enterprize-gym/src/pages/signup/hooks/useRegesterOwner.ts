import { useMutation } from "@tanstack/react-query";

import { registerOwner } from "../api/signupApi";

export function useRegisterOwner() {
  return useMutation({
    mutationFn: registerOwner,
  });
}