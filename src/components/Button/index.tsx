// Libs
import React from "react";
import { ButtonStyled } from "./styled";
import { ButtonProps } from "./interface.tsx";

export const Button: React.FC<ButtonProps> = props => (
  <ButtonStyled {...props} />
);
