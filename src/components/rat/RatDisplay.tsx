import styled from "@emotion/styled";
import { Canvas } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";
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
  const [canvasRemountTrigger, setCanvasRemountTrigger] = useState(
    new Date().getTime()
  );

  const setFullscreen = () => {
    fullscreenRef.current?.requestFullscreen();
  };

  const fullScreenChange = () => {
    if (!document.fullscreenElement)
      setCanvasRemountTrigger(new Date().getTime());
  };

  useLayoutEffect(() => {
    addEventListener("fullscreenchange", fullScreenChange);
    return () => {
      removeEventListener("fullscreenchange", fullScreenChange);
    };
  }, []);

  return (
    <RatPanel
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CanvasContainer ref={fullscreenRef}>
        <Canvas key={canvasRemountTrigger}>
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
