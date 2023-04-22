import { useLayoutEffect, useState } from "react";
import { Button } from "./DownloadButton.styled";

const DownloadButton = () => {
  const [url, setUrl] = useState("");

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    const update = () => setUrl(canvas?.toDataURL());

    update();

    canvas?.addEventListener("mouseup", update);

    return () => {
      canvas?.removeEventListener("mouseup", update);
    };
  }, []);

  return (
    <Button href={url} download>
      Download
    </Button>
  );
};

export default DownloadButton;
