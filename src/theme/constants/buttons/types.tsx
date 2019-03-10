import { css } from "styled-components";
import globals from "../globals";
import animations from "../animations";

const baseStyles = {
  backgroundColor: globals.colors["main"],
  fontFamily: globals.fonts["main"],
  border: "none",
  color: globals.colors["default"],
  padding: "10px",
  borderRadius: "5px"
};

console.log("animations", animations.pulse);

export const TYPES = {
  default: {
    ...baseStyles
  },
  ghost: {
    ...baseStyles,
    backgroundColor: "transparent",
    color: globals.colors["main"]
  }
};
