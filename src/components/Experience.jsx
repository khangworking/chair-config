import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import React from "react";
import Chair from "./Chair";

const Experience = () => {
  return (
    <>
      <PresentationControls
        speed={2.5}
        global
        polar={[-0.5, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 3, 0]}
        azimuth={[-Infinity, Infinity]}
      >
        <Stage
          preset={"upfront"}
          environment="city"
          intensity={0.6}
          castShadow={false}
        >
          <Chair />
        </Stage>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-1.5}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>
      </PresentationControls>
    </>
  );
};

export default Experience;
