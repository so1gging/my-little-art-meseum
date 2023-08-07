'use client'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three-stdlib'
import Link from 'next/link'

export default function Home() {
  const Model = () => {
    const gltf = useLoader(GLTFLoader, `./scene/scene.gltf`)
    return <primitive object={gltf.scene} scale={1} />
  }
  return (
    <>
      <Link href="details/virtual/123">123</Link>
    </>
  )
}
