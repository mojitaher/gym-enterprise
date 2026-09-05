import { INPUT_MODE_ENUM } from "../enums/inputmode";
import Classes from "../style/Input.module.css";

/**
 * INPUT_MODE_STYLE
 *
 * Maps each input mode to its corresponding style class.
 * Keeps the component body free of mode branching.
 */
export const INPUT_MODE_STYLE = {
  [INPUT_MODE_ENUM.default]:Classes.input,
  [INPUT_MODE_ENUM.success]: Classes.success,
  [INPUT_MODE_ENUM.warn]: Classes.warn,
  [INPUT_MODE_ENUM.error]: Classes.error,
};