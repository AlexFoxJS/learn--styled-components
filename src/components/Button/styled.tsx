import styled from "styled-components";
import { mapToTheme as theme } from "styled-map";
import { ButtonProps } from "./interface";

const buttonColor = () => theme("colors");

export const ButtonStyled = styled.button`
  ${props => console.log}
  ${theme("buttons.type")};
  ${theme("buttons.size")};
  ${theme("animations")};
  ${({ color }) => color && `color: ${color}`};
`;
