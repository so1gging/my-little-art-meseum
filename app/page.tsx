'use client'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three-stdlib'

export default function Home() {
  const Model = () => {
    const gltf = useLoader(GLTFLoader, `./scene/scene.gltf`)
    return <primitive object={gltf.scene} scale={1} />
  }
  return (
    <>
      1{/*<Canvas camera={{ position: [4, 0.3, 3.9] }}>*/}
      {/*  <ambientLight intensity={0.6} />*/}
      {/*  <directionalLight castShadow position={[0, -10, 0]} intensity={1.5} />*/}
      {/*  <directionalLight castShadow position={[0, 10, 0]} intensity={0.25} />*/}
      {/*  <pointLight position={[0, -10, 0]} intensity={0.1} />*/}
      {/*  <pointLight position={[0, 0, 50]} intensity={0.4} />*/}
      {/*  <pointLight position={[0, 0, -50]} intensity={0.4} />*/}
      {/*  <pointLight position={[50, 0, 0]} intensity={0.4} />*/}
      {/*  <Model />*/}
      {/*  <OrbitControls rotateSpeed={0.3} />*/}
      {/*</Canvas>*/}
    </>
  )
}
