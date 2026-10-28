"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import dynamic from "next/dynamic";

function MonogramMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Generate rounded cube face texture with letter D
  const dTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.fillStyle = "#FF5A1F";
    ctx.fillRect(0, 0, 512, 512);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "900 320px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("D", 256, 276);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.7;
      meshRef.current.rotation.x += delta * 0.35;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.8, 1.8, 1.8]} />
      {Array.from({ length: 6 }).map((_, i) => (
        <meshStandardMaterial
          key={i}
          attach={`material-${i}`}
          map={dTexture || undefined}
          color={dTexture ? undefined : "#FF5A1F"}
          roughness={0.2}
          metalness={0.1}
        />
      ))}
    </mesh>
  );
}

function MonogramCanvas() {
  return (
    <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] mx-auto">
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.6} />
        <directionalLight position={[3, 5, 4]} intensity={2.6} />
        <directionalLight position={[-3, -3, -3]} intensity={1.4} color="#FF9060" />
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
          <MonogramMesh />
        </Float>
      </Canvas>
    </div>
  );
}

export const Monogram3D = dynamic(() => Promise.resolve(MonogramCanvas), {
  ssr: false,
  loading: () => (
    <div className="w-[180px] h-[180px] flex items-center justify-center">
      <div className="w-24 h-24 rounded-2xl bg-orange flex items-center justify-center shadow-2xl">
        <span className="text-white font-display font-black text-5xl">D</span>
      </div>
    </div>
  ),
});
