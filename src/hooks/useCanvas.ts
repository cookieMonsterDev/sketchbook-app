import { useRef, useState, useEffect } from "react";

const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d");
    canvas.height = 600;
    canvas.width = 800;
    setContext(context);
  }, [canvasRef]);

  return { canvasRef, context };
};

export default useCanvas;
