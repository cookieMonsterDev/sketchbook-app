import React from "react";
import { Container, Hr } from "./ToolBar.styled";
import { Logo } from "../Logo";

export const ToolBarComponent: React.FC = () => {
  return (
    <Container aria-label="toolbar menu">
     <Logo url="https://github.com/cookieMonsterDev?tab=repositories" label="SketchBook"/>
     <Hr />
    </Container>
  );
};
