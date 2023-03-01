import { Controls } from "./components/controls/Controls";
import { MainContainer } from "./components/MainContainer";
import { RatDisplay } from "./components/RatDisplay";

const App = () => {
  return (
    <MainContainer>
      <RatDisplay />
      <Controls />
    </MainContainer>
  );
};

export default App;
