import React from "react";
import { GridStyled } from "./styled";
import { GridProps } from "./interface.tsx";

export const Grid: React.FC<GridProps> = props => <GridStyled {...props} />;
