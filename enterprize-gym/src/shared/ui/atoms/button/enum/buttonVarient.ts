export const BUTTON_VARIANT_ENUM = {
    primary: 'primary',
    secondary: 'secondary'
} as const;

export type BUTTON_VARIANT = typeof BUTTON_VARIANT_ENUM[keyof typeof BUTTON_VARIANT_ENUM];