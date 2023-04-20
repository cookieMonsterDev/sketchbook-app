import { useState } from "react";
import { Canvas } from "./Canvas.styled";
import useCanvas from "../../hooks/useCanvas";
import { useAppSelector } from "../../hooks/storeHooks";

export const CanvasComponent: React.FC = () => {
  const settings = useAppSelector((state) => state.settings);
  const { canvasRef, context } = useCanvas();
  const [draw, setDraw] = useState(false);

  const startPosition = () => setDraw(true);

  const endPosition = () => {
    setDraw(false);
    context?.beginPath();
  };

  const move = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const ctx = context;

    if (!draw || !ctx) return;

    ctx.lineWidth = 1;
    ctx.lineCap = "round";
    ctx.strokeStyle = settings.brush_color;

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  };

  return (
    <Canvas
      ref={canvasRef}
      onMouseDown={startPosition}
      onMouseUp={endPosition}
      onMouseMove={move}
      background={settings.background_color}
    />
  );
};
