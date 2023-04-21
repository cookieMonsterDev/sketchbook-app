import { useRef, useState, useEffect } from "react";

const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d");
    canvas.height = window.innerHeight - 1;
    canvas.width = window.innerWidth - 161;
    setContext(context);

    const resize = () => {
      canvas.height = window.innerHeight - 2;
      canvas.width = window.innerWidth - 162;
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef]);

  return { canvasRef, context };
};

export default useCanvas;
