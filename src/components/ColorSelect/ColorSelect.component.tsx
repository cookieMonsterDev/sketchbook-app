import React, { useState } from "react";
import { Container } from "./ColorSelect.styled";
import { ColorSelectProps } from "./ColorSelect.types";
import { ColorPicker } from "../ColorPicker";

export const ColorSelectComponent: React.FC<ColorSelectProps> = ({
  color,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const handleAccept = (e: string) => {
    onChange && onChange(e);
    setOpen(false);
  };

  return (
    <>
      <Container bg={color} onClick={() => setOpen((prev) => !prev)} />
      <ColorPicker
        show={open}
        onClose={() => setOpen(false)}
        color={color}
        onAccept={handleAccept}
      />
    </>
  );
};
