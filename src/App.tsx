import { Canvas } from "./components/Canvas";
import { useAppDispatch } from "./hooks/storeHooks";
import { changeBackgroundColor, changeBrushColor } from "./store/slices/settings";

const App = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <button onClick={() => dispatch(changeBackgroundColor("red"))}>
        change bg
      </button>
      <button onClick={() => dispatch(changeBrushColor("purple"))}>
        change br
      </button>
      <Canvas />
    </>
  );
};

export default App;
