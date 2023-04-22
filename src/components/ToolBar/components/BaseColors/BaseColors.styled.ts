import styled from '@emotion/styled'

export const Container = styled.ul`
  grid-area: colors;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 1rem;
  padding: 0.6rem;
  list-style: none;
  margin-bottom: 0.6rem;
  list-style: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  flex-wrap: wrap;
  max-height: 10rem;
`;

export const ColorItem = styled.li<{ bg: string }>`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 1px solid black;
  background: ${({ bg }) => bg};
`;