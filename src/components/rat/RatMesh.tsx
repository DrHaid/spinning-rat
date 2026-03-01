import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import RatModel from "../../assets/rat.gltf?url";
import { ForwardedRef, forwardRef, JSX } from "react";
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
  (props: JSX.IntrinsicElements["group"], ref: ForwardedRef<Group>) => {
    const gltf = useGLTF(RatModel);
    const nodes = gltf.nodes as GLTFResult["nodes"];
    const materials = gltf.materials as GLTFResult["materials"];
    return (
      <group ref={ref} {...props} dispose={null}>
        <mesh
          geometry={nodes.RatTextured.geometry}
          material={materials.Material}
        />
      </group>
    );
  },
);

useGLTF.preload(RatModel);
