import styled from "@emotion/styled";
import { Button, FilledInput } from "@mui/material";

export const Container = styled.dialog`
  position: fixed;
  inset: 0;
  margin: auto;
  width: 30rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(180, 180, 180, 1);
  background: white;

  [class$="react-colorful"] {
    gap: 0.5rem;
    width: 14rem;
  }

  [class$="react-colorful__saturation"] {
    border-radius: 0;
  }

  [class$="react-colorful__alpha react-colorful__last-control"] {
    border-radius: 0;

    cursor: pointer;
    &:active {
      cursor: grab;
    }
  }

  [class$="react-colorful__pointer react-colorful__saturation-pointer"] {
    width: 1rem;
    height: 1rem;

    cursor: pointer;
    &:active {
      cursor: grab;
    }
  }

  [class$="react-colorful__pointer react-colorful__saturation-pointer"] {
    width: 1rem;
    height: 1rem;

    cursor: pointer;
    &:active {
      cursor: grab;
    }
  }
`;

export const Content = styled.div`
  padding: 0.3rem 1rem 1rem 1rem;
  display: grid;
  grid-template-areas:
    "title title"
    "editor settings"
    "basecolors customsolors";
`;

export const Header = styled.header`
  height: 1.6rem;
  border-radius: 0.4rem 0.4rem 0 0;
  width: 100%;
  background: var(--light-gray);
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    cursor: pointer;
    width: 1.2rem;
    height: 1.2rem;
    color: var(--gray);
    margin-right: 0.3rem;
    transition: all 500ms;

    &:hover {
      color: red;
    }
  }
`;

export const Title = styled.h1`
  grid-area: title;
  font-size: 1rem;
  margin-bottom: 0.3rem;
`;

export const SubTitle = styled.h2`
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
`;

export const BaseColorsContainer = styled.section`
  grid-area: basecolors;
  width: 16rem;
  padding-top: 1rem;
`;

export const BaseColors = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

export const ColorItem = styled.li<{ bg: string }>`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid rgba(180, 180, 180, 1);
  background: ${({ bg }) => bg};
`;

export const ManuaSettings = styled.section`
  grid-area: settings;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Setting = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 700;
  margin-left: 1rem;
`;

export const Input = styled(FilledInput)`
  svg {
    cursor: pointer;
    width: 1rem;
    height: 1rem;
  }

  input {
    padding: 0;
  }

  height: 2rem;
  width: 8rem;
  background: transparent;
  font-size: 0.8rem;

  &:hover {
    background: transparent;
  }

  &:focus {
    background: transparent;
  }
`;

export const Footer = styled.footer`
  border-radius: 0 0 0.4rem 0.4rem;
  padding: 0.5rem;
  width: 100%;
  background: rgba(243, 243, 243, 1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.6rem;
`;

export const OkButton = styled(Button)`
  text-decoration: none;
  width: 100%;
  font-size: 0.7rem;
  background: rgba(142, 58, 167, 1);
  padding: 2px 2rem;

  &:hover {
    background: rgba(152, 77, 175, 1);
  }
`;

export const CancelButton = styled(Button)`
  text-decoration: none;
  text-transform: none;
  width: 100%;
  color: black;
  font-size: 0.7rem;
  background: rgba(251, 251, 251, 1);
  padding: 2px 2rem;

  &:hover {
    background: rgba(249, 249, 249, 1);
  }
`;
