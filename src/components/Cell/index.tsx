import React from "react";
import { CellStyled } from "./styled";
import { CellProps } from "./interface.tsx";

export const Cell: React.FC<CellProps> = props => <CellStyled {...props} />;
