
import { useState } from "react";

import { registrationCookie } from "../utils/registrationCookie";

export function useRegistrationId() {
  const [registrationId, setRegistrationId] = useState<string | null>(
    () => registrationCookie.get()
  );

  const saveRegistrationId = (id: string) => {
    registrationCookie.set(id);
    setRegistrationId(id);
  };

  const clearRegistrationId = () => {
    registrationCookie.remove();
    setRegistrationId(null);
  };

  return {
    registrationId,
    saveRegistrationId,
    clearRegistrationId,
  };
}
