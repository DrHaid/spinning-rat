import { Controls } from "./components/controls/Controls";
import { MainContainer } from "./components/MainContainer";
import { RatDisplay } from "./components/RatDisplay";
import { Socials } from "./components/Socials";

const App = () => {
  return (
    <MainContainer>
      <RatDisplay />
      <Controls />
      <Socials />
    </MainContainer>
  );
};

export default App;
