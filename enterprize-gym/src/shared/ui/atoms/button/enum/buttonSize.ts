export const BUTTON_ENUMS_SIZE = {
    small: 'small',
    large: 'large'
} as const;

export type BUTTON_SIZE = typeof BUTTON_ENUMS_SIZE[keyof typeof BUTTON_ENUMS_SIZE];