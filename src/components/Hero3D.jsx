import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, OrbitControls } from '@react-three/drei'

const AnimatedSphere = () => {
  const meshRef = useRef()

  useFrame((state) => {
    // Gentle rotation
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = t * 0.2
    
    // Mouse interaction - slight tilt
    const x = state.pointer.x
    const y = state.pointer.y
    meshRef.current.rotation.y = t * 0.1 + x * 0.5
    meshRef.current.rotation.z = y * 0.5
  })

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.2}>
        <MeshDistortMaterial
          color="#3b0764" // Deep purple
          attach="material"
          distort={0.4} // Liquidy distortion
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  )
}

const Hero3D = () => {
  return (
    <div className="w-full h-[500px] cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#8b5cf6" /> {/* Violet */}
            <directionalLight position={[-10, -10, -5]} intensity={2} color="#06b6d4" /> {/* Cyan */}
            
            <AnimatedSphere />
            
            <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                autoRotate={true}
                autoRotateSpeed={3}
            />
        </Canvas>
    </div>
  )
}

export default Hero3D
