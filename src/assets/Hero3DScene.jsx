import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FaSyncAlt, FaCube } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

/**
 * Hero3DScene
 * Interactive 3D Holographic Tech Core built with Three.js.
 * Features an interactive Quantum Polyhedron Core, dual gyroscopic orbital rings,
 * floating vertex telemetry, mouse/touch drag-to-spin physics with inertia,
 * and dynamic light/dark mode shaders.
 */
export default function Hero3DScene() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const { darkMode } = useTheme();
  const [isInteracting, setIsInteracting] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  // References for drag physics
  const isDraggingRef = useRef(false);
  const prevPointerRef = useRef({ x: 0, y: 0 });
  const rotVelocityRef = useRef({ x: 0.005, y: 0.008 });
  const sceneGroupRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth || 320;
    const height = canvas.clientHeight || 320;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 18;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch {
      return;
    }

    // Main rotating group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);
    sceneGroupRef.current = mainGroup;

    // 2. Inner Glowing Quantum Polyhedron
    const coreGeom = new THREE.IcosahedronGeometry(3.2, 1);
    const coreMat = new THREE.MeshPhongMaterial({
      color: darkMode ? 0x06b6d4 : 0x0284c7,
      emissive: darkMode ? 0x083344 : 0x0369a1,
      emissiveIntensity: darkMode ? 0.6 : 0.3,
      wireframe: true,
      transparent: true,
      opacity: darkMode ? 0.85 : 0.75,
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    mainGroup.add(coreMesh);

    // Inner solid crystal nucleus
    const nucleusGeom = new THREE.OctahedronGeometry(1.8, 0);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: darkMode ? 0xc084fc : 0x7e22ce,
      roughness: 0.2,
      metalness: 0.85,
      wireframe: false,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeom, nucleusMat);
    mainGroup.add(nucleusMesh);

    // 3. Gyroscopic Orbital Tech Rings
    const ring1Geom = new THREE.TorusGeometry(5.2, 0.08, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: darkMode ? 0x38bdf8 : 0x0284c7,
      transparent: true,
      opacity: 0.7,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(6.0, 0.06, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: darkMode ? 0xc084fc : 0x9333ea,
      transparent: true,
      opacity: 0.6,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 4. Concentric Orbital Satellite Nodes
    const nodeCount = 18;
    const nodeGeom = new THREE.SphereGeometry(0.18, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: darkMode ? 0x34d399 : 0x059669,
    });
    const orbitalNodes = [];

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeom, nodeMat);
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 5.2;
      node.position.x = Math.cos(angle) * radius;
      node.position.y = Math.sin(angle) * radius;
      ring1.add(node);
      orbitalNodes.push(node);
    }

    // 5. Surrounding 3D Ambient Cloud
    const ambientDustCount = 120;
    const dustGeom = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(ambientDustCount * 3);

    for (let i = 0; i < ambientDustCount * 3; i += 3) {
      const r = 4 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      dustPositions[i] = r * Math.sin(phi) * Math.cos(theta);
      dustPositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      dustPositions[i + 2] = r * Math.cos(phi);
    }
    dustGeom.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));

    const dustMat = new THREE.PointsMaterial({
      size: 0.22,
      color: darkMode ? 0x38bdf8 : 0x0284c7,
      transparent: true,
      opacity: 0.65,
    });
    const dust = new THREE.Points(dustGeom, dustMat);
    mainGroup.add(dust);

    // 6. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, darkMode ? 0.7 : 0.9);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(darkMode ? 0x38bdf8 : 0x0284c7, 2.5, 30);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(darkMode ? 0xc084fc : 0x9333ea, 2, 30);
    pointLight2.position.set(-10, -10, -5);
    scene.add(pointLight2);

    // 7. Interactive Pointer Drag Handlers
    const onPointerDown = (clientX, clientY) => {
      isDraggingRef.current = true;
      setIsInteracting(true);
      prevPointerRef.current = { x: clientX, y: clientY };
      rotVelocityRef.current = { x: 0, y: 0 };
    };

    const onPointerMove = (clientX, clientY) => {
      if (!isDraggingRef.current) return;
      const deltaX = clientX - prevPointerRef.current.x;
      const deltaY = clientY - prevPointerRef.current.y;

      rotVelocityRef.current = {
        x: deltaY * 0.007,
        y: deltaX * 0.007,
      };

      if (mainGroup) {
        mainGroup.rotation.x += rotVelocityRef.current.x;
        mainGroup.rotation.y += rotVelocityRef.current.y;
      }

      prevPointerRef.current = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
      setTimeout(() => setIsInteracting(false), 800);
    };

    // Event listeners on canvas
    const handleMouseDown = (e) => onPointerDown(e.clientX, e.clientY);
    const handleMouseMove = (e) => onPointerMove(e.clientX, e.clientY);
    const handleMouseUp = () => onPointerUp();

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchMove = (e) => {
      if (e.touches.length === 1) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchEnd = () => onPointerUp();

    canvas.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    canvas.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    // 8. Animation Loop
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!isDraggingRef.current) {
        // Apply inertia velocity decay or auto-rotate
        if (autoRotate) {
          mainGroup.rotation.y += 0.008 + rotVelocityRef.current.y * 0.5;
          mainGroup.rotation.x += 0.004 + rotVelocityRef.current.x * 0.5;
        } else {
          mainGroup.rotation.y += rotVelocityRef.current.y;
          mainGroup.rotation.x += rotVelocityRef.current.x;
        }

        rotVelocityRef.current.x *= 0.94;
        rotVelocityRef.current.y *= 0.94;
      }

      // Orbital ring counter-rotations
      ring1.rotation.z = elapsed * 0.4;
      ring2.rotation.z = -elapsed * 0.3;
      nucleusMesh.rotation.y = -elapsed * 0.8;
      nucleusMesh.rotation.x = elapsed * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();

      canvas.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);

      coreGeom.dispose();
      coreMat.dispose();
      nucleusGeom.dispose();
      nucleusMat.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      nodeGeom.dispose();
      nodeMat.dispose();
      dustGeom.dispose();
      dustMat.dispose();
      renderer.dispose();
    };
  }, [darkMode, autoRotate]);

  const handleReset = () => {
    if (sceneGroupRef.current) {
      sceneGroupRef.current.rotation.set(0, 0, 0);
      rotVelocityRef.current = { x: 0.004, y: 0.008 };
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square mx-auto flex items-center justify-center select-none"
    >
      {/* Outer 3D Hologram Glow Rings */}
      <div className="absolute inset-2 rounded-full border border-cyan-400/20 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent blur-md pointer-events-none" />
      <div className="absolute inset-8 rounded-full border border-dashed border-purple-400/25 animate-spin [animation-duration:35s] pointer-events-none" />

      {/* Three.js Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing touch-none"
        title="Interactive 3D Holographic Core - Drag to rotate in 3D"
        aria-label="Interactive 3D Holographic Core"
      />

      {/* Floating 3D Telemetry HUD Controls */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 dark:bg-slate-900/80 backdrop-blur-xl border border-cyan-400/30 text-[10px] font-mono text-cyan-300 shadow-lg pointer-events-none">
        <FaCube className="text-cyan-400 animate-pulse text-[9px]" />
        <span>{isInteracting ? "3D Physics Active" : "Interactive 3D Core"}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
      </div>

      <div className="absolute bottom-2 inset-x-4 z-20 flex items-center justify-between text-[10px] font-mono">
        <span className="px-2 py-0.5 rounded-md bg-white/[0.06] backdrop-blur-md border border-white/10 text-slate-400">
          Drag to Rotate • 3D
        </span>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-2 py-0.5 rounded-md border text-[10px] font-mono transition-all cursor-pointer backdrop-blur-md ${
              autoRotate
                ? "bg-cyan-500/20 border-cyan-400/40 text-cyan-300"
                : "bg-white/[0.06] border-white/10 text-slate-400"
            }`}
            title="Toggle Auto Rotation"
          >
            {autoRotate ? "Auto: ON" : "Auto: OFF"}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 rounded-md bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer backdrop-blur-md"
            title="Reset 3D Core Angle"
            aria-label="Reset 3D Core"
          >
            <FaSyncAlt className="text-[9px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
