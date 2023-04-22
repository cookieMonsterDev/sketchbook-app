import React from "react";
import {
  Container,
  SizeSlider,
  Title,
  Value,
  Values,
} from "./BrushSection.styled";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import { changeBrushSize } from "../../../../store/slices/settings";

const BrushSection = () => {
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    dispatch(changeBrushSize(Number(e.target.value)));
  };

  return (
    <Container>
      <Title>Brush</Title>
      <SizeSlider
        aria-label="Custom marks"
        orientation="vertical"
        defaultValue={3}
        min={1}
        max={100}
        valueLabelDisplay="auto"
        onChange={handleSizeChange}
      />
      <Values>
        <Value>
          <label>Sixe</label>
          <span>{settings.brush_size}</span>
        </Value>
        <Value>
          <label>Color</label>
          <span>{settings.brush_color}</span>
        </Value>
      </Values>
    </Container>
  );
};

export default BrushSection;
