import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import RatModel from "../../assets/rat.gltf?url";
import { forwardRef } from "react";
import { Group } from "three";

type GLTFResult = GLTF & {
  nodes: {
    RatTextured: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

export const RatMesh = forwardRef(
  (props: JSX.IntrinsicElements["group"], ref: React.ForwardedRef<Group>) => {
    const { nodes, materials } = useGLTF(RatModel) as GLTFResult;
    return (
      <group ref={ref} {...props} dispose={null}>
        <mesh
          geometry={nodes.RatTextured.geometry}
          material={materials.Material}
        />
      </group>
    );
  }
);

useGLTF.preload(RatModel);
