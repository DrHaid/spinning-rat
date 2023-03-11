import styled from "@emotion/styled";
import { Canvas } from "@react-three/fiber";
import { Panel } from "../Panel";
import { Rat } from "./Rat";

const CanvasContainer = styled.div`
  height: 50vh;
  aspect-ratio: 1 / 1;
`;

export const RatDisplay = () => {
  return (
    <Panel>
      <CanvasContainer>
        <Canvas>
          <Rat />
        </Canvas>
      </CanvasContainer>
    </Panel>
  );
};
