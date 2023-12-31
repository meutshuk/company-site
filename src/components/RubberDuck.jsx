/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 RubberDuck.glb 
*/

import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";

export function Model(props) {
  const duckRef = useRef();

  useFrame((state, delta) => {
    // duckRef.current.rotation.y += 0.005;
  });

  const { nodes, materials } = useGLTF("./models/RubberDuck.glb");
  return (
    <group {...props} ref={duckRef} dispose={null}>
      <mesh
        geometry={nodes.RubberDuck_mesh.geometry}
        material={materials.RubberDuck_mat1}
      />
    </group>
  );
}

useGLTF.preload("./models/RubberDuck.glb");

import { Canvas, useFrame } from "react-three-fiber";

export default function RubberDuck() {
  return (
    <Canvas
      camera={{
        position: [0, 18, -20],
      }}
      style={{ background: "transparent" }}
    >
      {/* <OrbitControls /> */}
      <ambientLight intensity={3.5} />
      <pointLight intensity={3} position={[10, 10, 10]} />
      <Float
        speed={2} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      >
        <Model scale={2.5} position={[0, -2, 0]} rotation={[0, Math.PI, 0]} />
      </Float>
    </Canvas>
  );
}
