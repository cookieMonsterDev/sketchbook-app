import styled from "@emotion/styled";

export const Logo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0.5rem;
  
  a {
    cursor: pointer;
  }
`;

export const Svg = styled.svg`
  width: 4rem;
  height: 4rem;

  polygon {
    stroke: url(#gradient);
  }

  path {
    stroke: black;
    fill: url(#gradient);
  }

  &:hover {
    path {
      stroke: white;
      fill: white;
    }
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  color: white;
`;
