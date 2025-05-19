// components/CubeBackground.tsx
// https://codepen.io/sk-chaurasiya/pen/emYqLOa
"use client";
import { useEffect } from "react";

export default function CubeBackground() {
  useEffect(() => {
    const cubeContainer = document.getElementById("cube-bg");
    if (!cubeContainer) return;

    for (let i = 0; i < 40; i++) {
      const cube = document.createElement("div");
      cube.classList.add("cube");
      cube.style.left = `${Math.random() * 100}vw`;
      cube.style.animationDuration = `${10 + Math.random() * 20}s`;
      cube.style.opacity = (Math.random() * 0.3 + 0.2).toString();
      cube.style.background =
        Math.random() > 0.5
          ? "rgba(144, 238, 144, 0.15)"
          : "rgba(23, 23, 23, 0.15)";
      cubeContainer.appendChild(cube);
    }
  }, []);

  return <div className="cube-bg" id="cube-bg"></div>;
}
