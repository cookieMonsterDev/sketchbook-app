import styled from "@emotion/styled";

export const Canvas = styled.canvas<{ background?: string }>`
  cursor: crosshair;
  background-color: ${({ background }) => background};
  border: 1px solid black;
`;
