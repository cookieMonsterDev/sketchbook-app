import styled from "@emotion/styled";
import { ColorPicker } from "../ColorPicker";

export const Container = styled.div<{ bg: string }>`
  cursor: pointer;
  width: 4rem;
  height: 2rem;
  border: 1px solid black;
  border-radius: 0.3rem;
  background: ${({ bg }) => bg};
`;
