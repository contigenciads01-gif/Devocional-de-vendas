"use client";

import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Lazy load Three canvas
const DynamicBookCanvas = dynamic(
  () => import("./Book3D").then((mod) => mod.Book3DCanvas),
  {
    ssr: false,
    loading: () => <BookFallback />,
  }
);

function BookFallback() {
  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
      {/* High-fidelity CSS 3D fallback */}
      <div className="relative w-[240px] sm:w-[280px] h-[360px] sm:h-[400px] bg-ink rounded-r-xl rounded-l-sm shadow-2xl p-6 border-l-8 border-[#1a1a1a] flex flex-col justify-between transform -rotate-3 hover:rotate-0 transition-transform duration-500">
        {/* Ribbon */}
        <div
          className="absolute -top-1 left-12 w-6 h-12 bg-orange"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)" }}
        />
        <div className="pt-14 text-center">
          <div className="text-white font-display font-black text-2xl tracking-[0.2em]">
            DEVOCIONAL
          </div>
          <div className="mt-2 inline-block bg-orange text-ink font-bold text-xs px-3 py-1 rounded">
            DE VENDAS
          </div>
        </div>
        <div className="text-center pb-4">
          <div className="text-stone text-[10px] tracking-widest font-semibold uppercase">
            5 Minutos · Ritual Diário
          </div>
          <div className="w-8 h-1 bg-orange mx-auto mt-2 rounded" />
        </div>
      </div>
    </div>
  );
}

export function Book3D() {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return <BookFallback />;
  }

  return <DynamicBookCanvas />;
}
