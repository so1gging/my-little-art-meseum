'use client'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three-stdlib'
import { OrbitControls } from '@react-three/drei'

export default function Page({ params }: { params: { id: string } }) {
  const Model = () => {
    const gltf = useLoader(GLTFLoader, `/scene/scene.gltf`)
    return <primitive object={gltf.scene} scale={1} />
  }
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [4, 0.3, 3.9] }}>
        <ambientLight intensity={0.6} />
        <directionalLight castShadow position={[0, -10, 0]} intensity={1.5} />
        <directionalLight castShadow position={[0, 10, 0]} intensity={0.25} />
        <pointLight position={[0, -10, 0]} intensity={0.1} />
        <pointLight position={[0, 0, 50]} intensity={0.4} />
        <pointLight position={[0, 0, -50]} intensity={0.4} />
        <pointLight position={[50, 0, 0]} intensity={0.4} />
        <Model />
        <OrbitControls rotateSpeed={0.2} />
      </Canvas>
    </div>
  )
}
