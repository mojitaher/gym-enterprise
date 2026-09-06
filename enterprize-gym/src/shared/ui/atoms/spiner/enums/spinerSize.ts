export const SPINNER_SIZE_ENUM = {
    extraSmall: "extraSmall",
    small: "small",
    medium: "medium",
    large: "large",
} as const;

export type SPINNER_SIZE = typeof SPINNER_SIZE_ENUM[keyof typeof SPINNER_SIZE_ENUM];