import React from "react";
import { Container, Hr } from "./ToolBar.styled";
import { Logo } from "../Logo";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import BrushSection from "./components/BrushSection/BrushSection";
import BaseColors from "./components/BaseColors/BaseColors";


export const ToolBarComponent: React.FC = () => {
  return (
    <Container aria-label="toolbar menu">
     <Logo url="https://github.com/cookieMonsterDev?tab=repositories" label="SketchBook"/>
     <Hr />
     <BrushSection />
     <BaseColors />
     <Hr />
     <DownloadButton />
    </Container>
  );
};
