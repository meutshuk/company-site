/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 VRHeadset.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/VRHeadset.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Headset_M_Cube-Mesh'].geometry} material={materials.Headset_M} />
      <mesh geometry={nodes['Headset_M_Cube-Mesh_1'].geometry} material={materials.Foam} />
      <mesh geometry={nodes['Headset_M_Cube-Mesh_2'].geometry} material={materials.Gray_Plastic} />
      <mesh geometry={nodes['Headset_M_Cube-Mesh_3'].geometry} material={materials.Lens} />
      <mesh geometry={nodes['Headset_M_Cube-Mesh_4'].geometry} material={materials.L} />
      <mesh geometry={nodes['Strap_Cube003-Mesh'].geometry} material={materials.Headset_M} />
      <mesh geometry={nodes['Strap_Cube003-Mesh_1'].geometry} material={materials.Strap} />
    </group>
  )
}

useGLTF.preload('/VRHeadset.glb')
