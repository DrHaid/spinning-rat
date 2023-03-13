import styled from "@emotion/styled";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Icon } from "../Icon";
import { RatPanel } from "../Panel";
import { Rat } from "./Rat";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const FloatingButton = styled.div`
  position: absolute;
  right: 0;
`;

const RelativeContainer = styled.div`
  position: relative;
`;

export const RatDisplay = () => {
  const fullscreenRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(false);

  const setFullscreen = () => {
    fullscreenRef.current?.requestFullscreen();
  };

  return (
    <RatPanel
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CanvasContainer ref={fullscreenRef}>
        <Canvas>
          <Rat />
        </Canvas>
      </CanvasContainer>
      {hover && (
        <RelativeContainer>
          <FloatingButton>
            <Icon iconType="fullscreen" onClick={setFullscreen} />
          </FloatingButton>
        </RelativeContainer>
      )}
    </RatPanel>
  );
};
