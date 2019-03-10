import styled from "styled-components";

const frGetter = value =>
  typeof value === "number" ? `repeat(${value}, 1fr)` : value;

export const GridStyled = styled.div`
  display: grid;
  height: ${({ height = "auto" }) => height};
  grid-auto-flow: ${({ flow = "row" }) => flow};
  grid-auto-rows: ${({ minRowHeight = "20px" }) =>
    `minmax(${minRowHeight}, auto)`};
  ${({ rows }) => rows && `grid-template-rows: ${frGetter(rows)}`};
  grid-template-columns: ${({ columns = 12 }) => frGetter(columns)};
  grid-gap: ${({ gap = "8px" }) => gap};
  ${({ columnGap }) => columnGap && `column-gap: ${columnGap}`};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};
  ${({ areas }) =>
    areas &&
    `grid-template-areas: ${areas.map(area => `"${area}"`).join(" ")}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
`;
