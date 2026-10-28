"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function BookMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Create high-res canvas texture for the book cover
  const coverTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1440;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // Background matte ink
    ctx.fillStyle = "#111111";
    ctx.fillRect(0, 0, 1024, 1440);

    // Subtle edge border
    ctx.strokeStyle = "#242424";
    ctx.lineWidth = 12;
    ctx.strokeRect(30, 30, 964, 1380);

    // Orange bookmark ribbon hanging from top
    ctx.fillStyle = "#FF5A1F";
    ctx.beginPath();
    ctx.moveTo(480, 0);
    ctx.lineTo(544, 0);
    ctx.lineTo(544, 140);
    ctx.lineTo(512, 110);
    ctx.lineTo(480, 140);
    ctx.closePath();
    ctx.fill();

    // Stacked brand seal: DEVOCIONAL
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "900 80px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.letterSpacing = "14px";
    ctx.fillText("DEVOCIONAL", 512, 600);

    // Orange tag for DE VENDAS
    const tagW = 340;
    const tagH = 80;
    const tagX = (1024 - tagW) / 2;
    const tagY = 660;
    const tagR = 12;

    ctx.fillStyle = "#FF5A1F";
    ctx.beginPath();
    ctx.roundRect(tagX, tagY, tagW, tagH, tagR);
    ctx.fill();

    // DE VENDAS text
    ctx.fillStyle = "#111111";
    ctx.font = "900 36px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.letterSpacing = "8px";
    ctx.fillText("DE VENDAS", 512, 715);

    // Subtitle tagline at bottom
    ctx.fillStyle = "#888888";
    ctx.font = "600 24px 'Inter', sans-serif";
    ctx.letterSpacing = "4px";
    ctx.fillText("5 MINUTOS · RITUAL DIÁRIO", 512, 1180);

    // Subtle orange accent line
    ctx.fillStyle = "#FF5A1F";
    ctx.fillRect(472, 1220, 80, 6);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Spine texture with "devocional."
  const spineTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 1440;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.fillStyle = "#111111";
    ctx.fillRect(0, 0, 256, 1440);

    ctx.save();
    ctx.translate(128, 720);
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "800 64px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("devocional.", 0, 20);
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Slow gentle float & tilt towards mouse
    const targetRotY = -0.45 + mouseRef.current.x * 0.25;
    const targetRotX = 0.15 - mouseRef.current.y * 0.2;

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotY,
      3,
      delta
    );
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetRotX,
      3,
      delta
    );
  });

  // Dimensions: width: 2.2, height: 3.1, depth: 0.42
  return (
    <group ref={groupRef} position={[0, 0.1, 0]}>
      {/* Book Cover Mesh */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.2, 3.1, 0.42]} />
        {/* Materials for 6 faces: Right, Left, Top, Bottom, Front, Back */}
        <meshStandardMaterial attach="material-0" color="#F2EFE9" roughness={0.9} /> {/* Pages right edge */}
        {spineTexture ? (
          <meshStandardMaterial attach="material-1" map={spineTexture} roughness={0.3} />
        ) : (
          <meshStandardMaterial attach="material-1" color="#111111" />
        )}
        <meshStandardMaterial attach="material-2" color="#F2EFE9" roughness={0.9} /> {/* Pages top edge */}
        <meshStandardMaterial attach="material-3" color="#F2EFE9" roughness={0.9} /> {/* Pages bottom edge */}
        {coverTexture ? (
          <meshStandardMaterial attach="material-4" map={coverTexture} roughness={0.25} metalness={0.05} />
        ) : (
          <meshStandardMaterial attach="material-4" color="#111111" />
        )}
        <meshStandardMaterial attach="material-5" color="#111111" roughness={0.3} /> {/* Back cover */}
      </mesh>

      {/* Fitilho (Orange Ribbon) hanging out at the bottom */}
      <mesh position={[0.2, -1.8, 0.05]} rotation={[0.08, 0, -0.05]}>
        <boxGeometry args={[0.16, 0.6, 0.015]} />
        <meshStandardMaterial color="#FF5A1F" roughness={0.4} />
      </mesh>
    </group>
  );
}

export function Book3DCanvas() {
  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.4} />
        {/* Studio key light */}
        <directionalLight position={[4, 6, 5]} intensity={2.2} />
        {/* Warm orange rim light on edge */}
        <directionalLight position={[-4, -2, -3]} intensity={2.8} color="#FF5A1F" />
        <directionalLight position={[0, 4, -4]} intensity={1.0} color="#FFFFFF" />

        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
          <BookMesh />
        </Float>

        <ContactShadows
          position={[0, -2.1, 0]}
          opacity={0.45}
          scale={7}
          blur={2.4}
          far={3}
        />
      </Canvas>
    </div>
  );
}
