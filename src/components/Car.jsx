import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const carRef = useRef();
  const { viewport } = useThree();

  useFrame((state, delta) => {
    carRef.current.rotation.y += 0.005;
  });

  const { nodes, materials } = useGLTF("./public/models/car.gltf");
  return (
    <group ref={carRef} scale={viewport.width / 5.7} {...props} dispose={null}>
      <mesh
        geometry={nodes.Mesh_body011.geometry}
        material={materials["lightBack.015"]}
      />
      <mesh
        geometry={nodes.Mesh_body011_1.geometry}
        material={materials["paintGreen.006"]}
      />
      <mesh
        geometry={nodes.Mesh_body011_2.geometry}
        material={materials["plastic.021"]}
      />
      <mesh
        geometry={nodes.Mesh_body011_3.geometry}
        material={materials["paintRed.005"]}
      />
      <mesh
        geometry={nodes.Mesh_body011_4.geometry}
        material={materials["lightFront.018"]}
      />
      <mesh
        geometry={nodes.Mesh_body011_5.geometry}
        material={materials["window.020"]}
      />
      <mesh
        geometry={nodes.Mesh_body011_6.geometry}
        material={materials["lightBlue.003"]}
      />
      <mesh
        geometry={nodes.Mesh_body011_7.geometry}
        material={materials["_defaultMat.028"]}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft036.geometry}
        material={materials["carTire.020"]}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft036_1.geometry}
        material={materials["_defaultMat.029"]}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft036_2.geometry}
        material={materials["plastic.022"]}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft037.geometry}
        material={materials["carTire.021"]}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft037_1.geometry}
        material={materials["_defaultMat.030"]}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft037_2.geometry}
        material={materials["plastic.023"]}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft038.geometry}
        material={materials["carTire.022"]}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft038_1.geometry}
        material={materials["_defaultMat.031"]}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft038_2.geometry}
        material={materials["plastic.024"]}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft007.geometry}
        material={materials["carTire.011"]}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft007_1.geometry}
        material={materials["_defaultMat.032"]}
      />
      <mesh
        geometry={nodes.Mesh_wheel_frontLeft007_2.geometry}
        material={materials["plastic.025"]}
      />
    </group>
  );
}

useGLTF.preload("./public/models/car.gltf");

export function Car() {
  return (
    <Canvas
      camera={{
        position: [0, 3, 5],
      }}
      style={{ background: "transparent" }}
    >
      <ambientLight />
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.5} />
      <pointLight intensity={2} position={[10, 10, 10]} />
      <Model position={[0, -1, 0]} />
    </Canvas>
  );
}
