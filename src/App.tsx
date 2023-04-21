import { Canvas } from "./components/Canvas"
import { ToolBar } from "./components/ToolBar";
import { Main } from "./styles/layout";


const App = () => {
  return (
    <Main>
      <ToolBar />
      <Canvas />
      {/* <ColorPicker /> */}
    </Main>
  );
};

export default App;
