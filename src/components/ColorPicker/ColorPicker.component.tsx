import { useState } from "react";
import { RgbaColor, RgbaColorPicker } from "react-colorful";
import {
  Header,
  Container,
  Content,
  Footer,
  CancelButton,
  OkButton,
  Title,
  BaseColors,
  BaseColorsContainer,
  SubTitle,
  ColorItem,
  ManuaSettings,
  Label,
  Setting,
  Input,
} from "./ColorPicker.styled";
import { ColorPickerProps } from "./ColorPicker.types";
import CloseIcon from "@mui/icons-material/Close";
import { baseColorsConfig } from "../../config";
import { colord } from "colord";
import { InputAdornment } from "@mui/material";

export const ColorPickerComponent: React.FC<ColorPickerProps> = ({
  color = "rgba(0, 0, 0, 1)",
  onClose,
  onAccept,
  baseColors = baseColorsConfig,
}) => {
  const [rgb, setRgb] = useState<RgbaColor>(colord(color).toRgb());
  const [hex, setHex] = useState(colord(rgb).toHex());

  const handleAccept = () => onAccept && onAccept(rgb);

  const handleBaseColor = (hex: string) => {
    const newRgb = colord(hex).toRgb();
    setRgb(newRgb);
    setHex(hex);
  };

  const handleChange = (rgb: RgbaColor) => {
    const newHex = colord(rgb).toHex();
    setRgb(rgb);
    setHex(newHex);
  };

  const handleHexChange = (hex: string) => {
    const newRgb = colord(hex).toRgb();
    setRgb(newRgb);
    setHex(hex);
  };

  const handleHexBlur = (hex: string) => {
    if (colord(hex).isValid()) return;
    setHex("#000000");
  };

  const handleRed = (number: number) => {
    setRgb((prev) => ({
      ...prev,
      r: number,
    }));
    const newHex = colord(rgb).toHex();
    setHex(newHex);
  };

  const handleRedClear = () => {
    setRgb((prev) => ({
      ...prev,
      r: 0,
    }));
    const newHex = colord(rgb).toHex();
    setHex(newHex);
  };

  const handleGreen = (number: number) => {
    setRgb((prev) => ({
      ...prev,
      g: number,
    }));
    const newHex = colord(rgb).toHex();
    setHex(newHex);
  };

  const handleGreenClear = () => {
    setRgb((prev) => ({
      ...prev,
      g: 0,
    }));
    const newHex = colord(rgb).toHex();
    setHex(newHex);
  };

  const handleBlue = (number: number) => {
    setRgb((prev) => ({
      ...prev,
      r: number,
    }));
    const newHex = colord(rgb).toHex();
    setHex(newHex);
  };

  const handleBlueClear = () => {
    setRgb((prev) => ({
      ...prev,
      r: 0,
    }));
    const newHex = colord(rgb).toHex();
    setHex(newHex);
  };

  return (
    <Container open={true}>
      <Header>
        <CloseIcon onClick={onClose} />
      </Header>
      <Content>
        <Title>Edit colors</Title>
        <RgbaColorPicker onChange={handleChange} color={rgb} />
        <ManuaSettings>
          <Setting>
            <Input
              id="hex"
              type="text"
              value={hex}
              onChange={(e) => handleHexChange(e.target.value)}
              onBlur={(e) => handleHexBlur(e.target.value)}
              inputProps={{ maxLength: 7 }}
              endAdornment={
                <InputAdornment position="end">
                  <CloseIcon onClick={() => setHex("#")} />
                </InputAdornment>
              }
            />
            <Label htmlFor="hex">HEX</Label>
          </Setting>
          <Setting>
            <Input
              id="red"
              type="number"
              value={rgb.r}
              inputProps={{ min: 0, max: 255 }}
              onChange={(e) => handleRed(Number(e.target.value))}
              endAdornment={
                <InputAdornment position="end">
                  <CloseIcon onClick={handleRedClear} />
                </InputAdornment>
              }
            />
            <Label htmlFor="hex">Red</Label>
          </Setting>
          <Setting>
            <Input
              id="green"
              type="number"
              value={rgb.g}
              inputProps={{ maxLength: 3 }}
              onChange={(e) => handleGreen(Number(e.target.value))}
              endAdornment={
                <InputAdornment position="end">
                  <CloseIcon onClick={handleGreenClear} />
                </InputAdornment>
              }
            />
            <Label htmlFor="hex">Green</Label>
          </Setting>
          <Setting>
            <Input
              id="blue"
              type="number"
              value={rgb.b}
              inputProps={{ maxLength: 3 }}
              onChange={(e) => handleBlue(Number(e.target.value))}
              endAdornment={
                <InputAdornment position="end">
                  <CloseIcon onClick={handleBlueClear} />
                </InputAdornment>
              }
            />
            <Label htmlFor="hex">Blue</Label>
          </Setting>
        </ManuaSettings>
        <BaseColorsContainer>
          <SubTitle>Basic colors</SubTitle>
          <BaseColors>
            {baseColors.map((e) => (
              <ColorItem key={e} bg={e} onClick={() => handleBaseColor(e)} />
            ))}
          </BaseColors>
        </BaseColorsContainer>
      </Content>
      <Footer>
        <OkButton variant="contained" onClick={handleAccept}>
          OK
        </OkButton>
        <CancelButton variant="contained" onClick={onClose}>
          Cancel
        </CancelButton>
      </Footer>
    </Container>
  );
};
