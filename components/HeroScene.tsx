'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Environment } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Car() {
  const groupRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.pointer.x * 1.2, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, state.pointer.y * 0.4, 0.05);
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        {/* Main body */}
        <mesh ref={bodyRef} position={[0, 0, 0]} castShadow>
          <boxGeometry args={[3.5, 0.8, 1.8]} />
          <meshPhysicalMaterial
            color="#111111"
            metalness={0.95}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.08}
            envMapIntensity={2}
          />
        </mesh>

        {/* Roof */}
        <mesh position={[0.2, 0.7, 0]} castShadow>
          <boxGeometry args={[2.2, 0.5, 1.5]} />
          <meshPhysicalMaterial
            color="#0a0a0a"
            metalness={0.92}
            roughness={0.12}
            clearcoat={1}
          />
        </mesh>

        {/* Windows */}
        <mesh position={[0.3, 0.6, 0.76]} castShadow>
          <boxGeometry args={[1.8, 0.35, 0.1]} />
          <meshPhysicalMaterial color="#1a1a1a" metalness={0.3} roughness={0.8} />
        </mesh>

        {/* Wheels */}
        {[[-1.2, -0.4, 0.9], [-1.2, -0.4, -0.9], [1.2, -0.4, 0.9], [1.2, -0.4, -0.9]].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.42, 0.42, 0.22, 32]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.4} />
          </mesh>
        ))}

        {/* Wheel rims */}
        {[[-1.2, -0.4, 0.9], [-1.2, -0.4, -0.9], [1.2, -0.4, 0.9], [1.2, -0.4, -0.9]].map((pos, i) => (
          <mesh key={`rim-${i}`} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.35, 0.35, 0.15, 32]} />
            <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.15} />
          </mesh>
        ))}
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-[32px] border border-[#d4af37]/20 bg-gradient-to-b from-[#0f1420] to-[#0a0e1a]">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 40 }} gl={{ antialias: true }}>
        <color attach="background" args={['#0a0e1a']} />
        <fog attach="fog" args={['#0a0e1a', 8, 20]} />

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={2} color="#ffffff" castShadow />
        <spotLight position={[-4, 6, -4]} angle={0.5} penumbra={1} intensity={2} color="#d4af37" />
        <pointLight position={[0, 3, -5]} intensity={1.5} color="#3b82f6" />

        {/* Environment */}
        <Environment preset="studio" />

        {/* 3D Car */}
        <Car />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>

      {/* Label */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2">
        <div className="rounded-full border border-[#d4af37]/40 bg-[#0a0e1a]/80 px-4 py-2 text-[0.65rem] uppercase tracking-[0.25em] text-[#e8c547]">
          Interactive 3D Model
        </div>
      </div>
    </div>
  );
}
