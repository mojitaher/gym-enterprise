
import Cookies from "js-cookie";

const REGISTRATION_ID_COOKIE = "registrationId";

const COOKIE_OPTIONS: Cookies.CookieAttributes = {
  expires: 1,
  path: "/",
  sameSite: "lax",
  secure: window.location.protocol === "https:",
};

export const registrationCookie = {
  get: (): string | null =>
    Cookies.get(REGISTRATION_ID_COOKIE) ?? null,

  set: (id: string): void => {
    Cookies.set(REGISTRATION_ID_COOKIE, id, COOKIE_OPTIONS);

    const savedId = Cookies.get(REGISTRATION_ID_COOKIE);

    if (savedId !== id) {
      throw new Error("ذخیره registrationId در کوکی ناموفق بود");
    }
  },

  remove: (): void => {
    Cookies.remove(REGISTRATION_ID_COOKIE, {
      path: "/",
    });
  },
};
