'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function CarStudio() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.8, 0.03);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.3, 0.03);
  });

  return (
    <group ref={group} position={[0, -0.8, 0]}>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[0, 0.1, 0]} castShadow>
          <boxGeometry args={[3.2, 0.7, 1.5]} />
          <meshPhysicalMaterial color="#0a0d10" metalness={0.95} roughness={0.18} clearcoat={1} clearcoatRoughness={0.15} />
        </mesh>
        <mesh position={[0.8, 0.55, 0]} castShadow>
          <boxGeometry args={[1.3, 0.55, 1.2]} />
          <meshPhysicalMaterial color="#11161b" metalness={0.9} roughness={0.2} clearcoat={1} />
        </mesh>
        <mesh position={[0.1, 0.7, 0]} castShadow>
          <boxGeometry args={[0.9, 0.36, 1.05]} />
          <meshPhysicalMaterial color="#0e1115" metalness={0.92} roughness={0.15} clearcoat={1} />
        </mesh>
        {[[-1.1, -0.2, 0.78], [-1.1, -0.2, -0.78], [1.1, -0.2, 0.78], [1.1, -0.2, -0.78]].map((position, index) => (
          <mesh key={index} position={position as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.34, 0.34, 0.18, 32]} />
            <meshStandardMaterial color="#111111" metalness={0.85} roughness={0.5} />
          </mesh>
        ))}
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-[32px] border border-[#c9a24b]/20 bg-[#05070a] shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
      <Canvas camera={{ position: [0, 1.8, 6], fov: 35 }}>
        <color attach="background" args={['#05070a']} />
        <fog attach="fog" args={['#05070a', 5, 12]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 4, 4]} intensity={2.2} color="#f2dcab" />
        <spotLight position={[-5, 5, 5]} angle={0.4} penumbra={1} intensity={18} color="#c9a24b" />
        <CarStudio />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 3} />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
        <div className="rounded-full border border-[#c9a24b]/30 bg-[#080a0d]/70 px-4 py-2 text-[0.62rem] uppercase tracking-[0.24em] text-[#e3bd6d]">Luxury studio render</div>
      </div>
    </div>
  );
}
