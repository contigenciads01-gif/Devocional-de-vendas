"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import dynamic from "next/dynamic";

function MedalMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Generate coin face texture with embossed D
  const faceTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.fillStyle = "#FF5A1F";
    ctx.fillRect(0, 0, 512, 512);

    // Inner ring
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.arc(256, 256, 210, 0, Math.PI * 2);
    ctx.stroke();

    // D Monogram
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "900 240px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("D", 256, 266);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.9;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.3, 0, 0]}>
      {/* Cylinder for coin */}
      <cylinderGeometry args={[1.5, 1.5, 0.22, 64]} />
      {/* Side material */}
      <meshStandardMaterial attach="material-0" color="#E04810" metalness={0.7} roughness={0.3} />
      {/* Top face */}
      {faceTexture ? (
        <meshStandardMaterial attach="material-1" map={faceTexture} metalness={0.4} roughness={0.3} />
      ) : (
        <meshStandardMaterial attach="material-1" color="#FF5A1F" />
      )}
      {/* Bottom face */}
      {faceTexture ? (
        <meshStandardMaterial attach="material-2" map={faceTexture} metalness={0.4} roughness={0.3} />
      ) : (
        <meshStandardMaterial attach="material-2" color="#FF5A1F" />
      )}
    </mesh>
  );
}

function MedalCanvas() {
  return (
    <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] mx-auto">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 4, 3]} intensity={2.4} />
        <directionalLight position={[-3, -2, -2]} intensity={1.8} color="#FF9060" />
        <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <MedalMesh />
        </Float>
      </Canvas>
    </div>
  );
}

export const Medal3D = dynamic(() => Promise.resolve(MedalCanvas), {
  ssr: false,
  loading: () => (
    <div className="w-[160px] h-[160px] flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-orange flex items-center justify-center shadow-lg border-4 border-white/80">
        <span className="text-white font-display font-black text-4xl">D</span>
      </div>
    </div>
  ),
});
