import styled from "@emotion/styled";

export const Button = styled.a`
  padding: 0.3rem;
  width: 100%;
  margin-top: 1rem;
  text-align: center;
  align-self: center;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 700;
  background: rgb(222, 170, 136, 1);
  color: rgba(61, 12, 2, 1);
  transition: all 500ms;

  &:hover {
    color: rgb(222, 170, 136, 1);
    background: rgba(173, 111, 105, 1);
  }
`;
