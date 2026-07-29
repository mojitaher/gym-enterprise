import { CHECKBOX_SHAPE_ENUM } from "../enums/checkboxShape";

import Classes from "../style/Checkbox.module.css";

/**
 * CHECKBOX_SHAPE_STYLE
 *
 * Maps each checkbox shape to its corresponding style class.
 *
 * Keeps the shape-to-style decision out of the component body: the
 * component just reads CHECKBOX_SHAPE_STYLE[shape] instead of branching.
 * Mirrors the INPUT_PASSWORD_VISIBILITY_TOGGLE pattern.
 */
export const CHECKBOX_SHAPE_STYLE = {
  [CHECKBOX_SHAPE_ENUM.square]: Classes.square,
  [CHECKBOX_SHAPE_ENUM.circle]: Classes.circle,
} ;
