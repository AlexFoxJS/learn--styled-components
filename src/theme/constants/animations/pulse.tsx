import { css, keyframes } from "styled-components";

export const pulseKeyframe = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const pulseAimation = css`
  animation: ${pulseKeyframe} 1s infinite alternate;
`;
