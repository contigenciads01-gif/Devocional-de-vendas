"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import dynamic from "next/dynamic";

function SunMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.2;
    }
    if (glowRef.current) {
      glowRef.current.rotation.z -= delta * 0.15;
    }
  });

  return (
    <group>
      {/* Sun Core */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshStandardMaterial
          color="#FF5A1F"
          emissive="#FF5A1F"
          emissiveIntensity={0.65}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* Outer Glow Halo */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.65, 32, 32]} />
        <meshBasicMaterial
          color="#FFA266"
          transparent
          opacity={0.18}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

function SunCanvas() {
  return (
    <div className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] relative mx-auto">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.6} />
        <pointLight position={[0, 0, 0]} intensity={3} color="#FF7A3D" />
        <directionalLight position={[2, 3, 4]} intensity={2.2} />
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
          <SunMesh />
        </Float>
      </Canvas>
    </div>
  );
}

export const Sun3D = dynamic(() => Promise.resolve(SunCanvas), {
  ssr: false,
  loading: () => (
    <div className="w-[180px] h-[180px] flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-orange to-orange/80 shadow-[0_0_50px_rgba(255,90,31,0.5)]" />
    </div>
  ),
});
