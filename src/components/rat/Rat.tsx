import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { Group } from "three";
import { RatSpinContext } from "../../RatSpinProvider";
import { RatMesh } from "./RatMesh";

const deg2rad = (degrees: number) => degrees * (Math.PI / 180);

export const Rat = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const ratMesh = useRef<Group>(null!);
  const { spinParams } = useContext(RatSpinContext);

  useFrame(() => {
    ratMesh.current.rotation.x += spinParams.spinX * spinParams.speed;
    ratMesh.current.rotation.y += spinParams.spinY * spinParams.speed;
    ratMesh.current.rotation.z += spinParams.spinZ * spinParams.speed;
  });

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
