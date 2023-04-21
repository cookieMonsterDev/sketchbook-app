import { Canvas } from "./components/Canvas";
import { ColorPicker } from "./components/ColorPicker";
import { useAppDispatch } from "./hooks/storeHooks";
import {
  changeBackgroundColor,
  changeBrushColor,
} from "./store/slices/settings";
import { Main } from "./styles/layout";


const App = () => {
  const dispatch = useAppDispatch();

  return (
    <Main>
      {/* <button onClick={() => dispatch(changeBackgroundColor("red"))}>
        change bg
      </button>
      <button onClick={() => dispatch(changeBrushColor("purple"))}>
        change br
      </button> */}
      <Canvas />
    </Main>
  );
};

export default App;
