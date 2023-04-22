import { memo } from "react";
import { useAppDispatch } from "../../../../hooks/storeHooks";
import { ColorItem, Container } from "./BaseColors.styled";
import { colord } from "colord";
import { changeBrushColor } from "../../../../store/slices/settings";
import { baseColors } from "./config";

const BaseColors = () => {
  const dispatch = useAppDispatch();

  const handleClick = (color: string) => {
    const rgb = colord(color).toRgbString();
    dispatch(changeBrushColor(rgb));
  };

  return (
    <Container>
      {baseColors.map((e) => (
        <ColorItem key={e} bg={e} onClick={() => handleClick(e)} />
      ))}
    </Container>
  );
};

export default memo(BaseColors);
