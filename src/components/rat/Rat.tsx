import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { Group, Vector3 } from "three";
import { RatSpinContext } from "../../RatSpinProvider";
import { RatMesh } from "./RatMesh";

const deg2rad = (degrees: number) => degrees * (Math.PI / 180);

const SPEED_MULTIPLIER = 65;
const VECTOR = {
  RIGHT: new Vector3(1, 0, 0),
  UP: new Vector3(0, 1, 0),
  FORWARD: new Vector3(0, 0, 1),
};

export const Rat = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const ratMesh = useRef<Group>(null!);
  const { spinParams } = useContext(RatSpinContext);

  useFrame((_state, delta) => {
    const speed = convertSpeed(spinParams.speed);
    ratMesh.current.rotateOnAxis(
      VECTOR.RIGHT,
      spinParams.spinX * (speed * delta)
    );
    ratMesh.current.rotateOnAxis(VECTOR.UP, spinParams.spinY * (speed * delta));
    ratMesh.current.rotateOnAxis(
      VECTOR.FORWARD,
      spinParams.spinZ * (speed * delta)
    );
  });

  const convertSpeed = (speedParam: number) => {
    const speed = 1 - Math.cos((speedParam * Math.PI) / 2);
    return speed * SPEED_MULTIPLIER;
  };

  return (
    <>
      <PerspectiveCamera
        position={[0, 0.3, 1.75]}
        rotation={[deg2rad(-5), 0, 0]}
        zoom={spinParams.zoom}
        makeDefault
      />
      <RatMesh ref={ratMesh} />
    </>
  );
};
