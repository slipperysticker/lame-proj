"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Text3D, Center, OrbitControls, Float } from "@react-three/drei"
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import { Suspense, useRef, useMemo } from "react"
import * as THREE from "three"

// Dripping particle component
function DripParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 200 : 800

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      // Start particles near the text
      positions[i3] = (Math.random() - 0.5) * 8 // x
      positions[i3 + 1] = Math.random() * 2 + 1 // y (above text)
      positions[i3 + 2] = (Math.random() - 0.5) * 2 // z

      // Drip velocity
      velocities[i3] = (Math.random() - 0.5) * 0.01 // slight x movement
      velocities[i3 + 1] = -Math.random() * 0.03 - 0.01 // falling down
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01 // slight z movement

      // Purple color variations
      const purpleVariation = Math.random() * 0.3 + 0.7
      colors[i3] = 0.85 * purpleVariation // R
      colors[i3 + 1] = 0.71 * purpleVariation // G
      colors[i3 + 2] = 0.996 * purpleVariation // B
    }

    return { positions, velocities, colors }
  }, [particleCount])

  useFrame(() => {
    if (!particlesRef.current) return

    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
    const velocities = particles.velocities

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3

      // Update position based on velocity
      positions[i3] += velocities[i3]
      positions[i3 + 1] += velocities[i3 + 1]
      positions[i3 + 2] += velocities[i3 + 2]

      // Reset particle if it falls too far
      if (positions[i3 + 1] < -3) {
        positions[i3] = (Math.random() - 0.5) * 8
        positions[i3 + 1] = Math.random() * 2 + 2
        positions[i3 + 2] = (Math.random() - 0.5) * 2
      }
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particles.colors}
          itemSize={3}
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

// Animated 3D Text
function AnimatedText() {
  const textRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (textRef.current) {
      // Subtle floating animation
      textRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1
      // Slight rotation
      textRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.05
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Center>
        <Text3D
          ref={textRef}
          font="/fonts/Space_Grotesk_Bold.json"
          size={1.5}
          height={0.3}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          LAME
          <meshStandardMaterial
            color="#d8b4fe"
            emissive="#a855f7"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
      </Center>
    </Float>
  )
}

// Main 3D Scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#d8b4fe" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} color="#ffffff" />

      {/* 3D Text */}
      <AnimatedText />

      {/* Dripping Particles */}
      <DripParticles />

      {/* Post-processing Effects */}
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.SCREEN}
        />
        <ChromaticAberration
          offset={new THREE.Vector2(0.002, 0.002)}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
    </>
  )
}

// Loading fallback
function CanvasLoader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-6xl font-bold font-[family-name:var(--font-space-grotesk)]">
        <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-accent bg-clip-text text-transparent animate-pulse">
          LAME
        </span>
      </div>
    </div>
  )
}

export default function Hero3D() {
  return (
    <div className="w-full h-[600px] md:h-[700px] relative">
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <Scene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </Suspense>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
    </div>
  )
}
