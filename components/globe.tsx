"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

interface GlobeProps {
  className?: string;
}

export function Globe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => {
      if (canvas && canvas.offsetWidth) {
        width = canvas.offsetWidth;
        globe.update({ width: width * 2, height: width * 2 });
      }
    };
    window.addEventListener("resize", onResize);

    const isDark = document.documentElement.classList.contains("dark");
    const initialWidth = canvas.offsetWidth || 300;
    width = initialWidth;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: initialWidth * 2,
      height: initialWidth * 2,
      phi: 0,
      theta: 0.2,
      dark: isDark ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: isDark ? [0.3, 0.3, 0.35] : [0.95, 0.95, 0.95],
      markerColor: [0.15, 0.55, 1],
      glowColor: isDark ? [0.2, 0.3, 0.5] : [0.85, 0.88, 0.95],
      markers: [
        { location: [28.6139, 77.209], size: 0.06 }, // New Delhi / India
        { location: [37.7749, -122.4194], size: 0.04 }, // SF / US
        { location: [51.5074, -0.1278], size: 0.04 }, // London / UK
        { location: [1.3521, 103.8198], size: 0.04 }, // Singapore
        { location: [35.6762, 139.6503], size: 0.04 }, // Tokyo
      ],
      arcs: [
        { from: [28.6139, 77.209], to: [37.7749, -122.4194] },
        { from: [28.6139, 77.209], to: [51.5074, -0.1278] },
        { from: [28.6139, 77.209], to: [1.3521, 103.8198] },
      ],
      arcColor: [0.2, 0.5, 1],
      arcWidth: 0.4,
      arcHeight: 0.3,
    });

    // Observe dark theme changes to update the globe dynamically
    const observer = new MutationObserver(() => {
      const darkNow = document.documentElement.classList.contains("dark");
      globe.update({
        dark: darkNow ? 1 : 0,
        baseColor: darkNow ? [0.3, 0.3, 0.35] : [0.95, 0.95, 0.95],
        glowColor: darkNow ? [0.2, 0.3, 0.5] : [0.85, 0.88, 0.95],
      });
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    let animationId: number;
    function animate() {
      phi += 0.004;
      globe.update({
        phi: phi + pointerInteractionMovement.current / 200,
      });
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      cancelAnimationFrame(animationId);
      globe.destroy();
    };
  }, []);

  return (
    <div
      className={`relative flex items-center justify-center w-full max-w-[300px] aspect-square mx-auto select-none ${
        className || ""
      }`}
    >
      <canvas
        ref={canvasRef}
        className="size-full cursor-grab active:cursor-grabbing opacity-95 transition-opacity duration-300 touch-none"
        style={{ width: "100%", height: "100%", contain: "layout paint size" }}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
          }
        }}
      />
    </div>
  );
}
