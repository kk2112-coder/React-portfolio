import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

/**
 * Background3DCanvas - Anime Aesthetic 3D Universe
 * Features:
 * - 3D Floating Sakura (Cherry Blossom) petals fluttering and tumbling in the wind
 * - Anime celestial starlight motes & glowing ethereal embers
 * - Floating anime diamond crystal stars in deep perspective
 * - Interactive breeze tracking cursor movement & scroll inertia
 * - Full dark (cyberpunk anime night) and light (daydream anime sky) palette tuning
 */
export default function Background3DCanvas() {
  const canvasRef = useRef(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 75;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch {
      return;
    }

    // 2. 3D Sakura (Cherry Blossom) Petals
    const petalCount = 65;
    const petalGroup = new THREE.Group();

    // Create curved Sakura petal shape
    const petalShape = new THREE.Shape();
    petalShape.moveTo(0, 0);
    petalShape.bezierCurveTo(0.5, 0.4, 0.8, 1.2, 0.35, 1.9);
    petalShape.bezierCurveTo(0.15, 2.05, 0.08, 2.12, 0, 1.85); // central notch
    petalShape.bezierCurveTo(-0.08, 2.12, -0.15, 2.05, -0.35, 1.9);
    petalShape.bezierCurveTo(-0.8, 1.2, -0.5, 0.4, 0, 0);

    const petalGeometry = new THREE.ShapeGeometry(petalShape, 8);
    // Add realistic 3D curvature to petals
    const posAttr = petalGeometry.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const y = posAttr.getY(i);
      const x = posAttr.getX(i);
      posAttr.setZ(i, Math.sin(y * 1.4) * 0.22 + x * x * 0.12);
    }
    petalGeometry.computeVertexNormals();

    const petalColorsDark = [
      0xf472b6, // Sakura vibrant pink
      0xfb7185, // Rose coral
      0xe879f9, // Anime lilac
      0x38bdf8, // Cyberpunk neon cyan accent
      0xfda4af, // Soft blush
    ];

    const petalColorsLight = [
      0xf472b6, // Cherry blossom pink
      0xfb7185, // Petal rose
      0xfbcfe8, // Soft pastel sakura
      0xa5f3fc, // Soft anime sky
      0xf9a8d4, // Blossom pink
    ];

    const petalColors = darkMode ? petalColorsDark : petalColorsLight;
    const petals = [];

    for (let i = 0; i < petalCount; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: petalColors[i % petalColors.length],
        side: THREE.DoubleSide,
        transparent: true,
        opacity: darkMode ? 0.72 : 0.45,
        depthWrite: false,
      });

      const mesh = new THREE.Mesh(petalGeometry, mat);
      const scale = 0.7 + Math.random() * 0.7;
      mesh.scale.set(scale, scale, scale);

      // Distribute in a generous volume around view frustum
      mesh.position.set(
        (Math.random() - 0.5) * 160,
        (Math.random() - 0.5) * 130,
        (Math.random() - 0.5) * 80
      );

      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      mesh.userData = {
        fallSpeed: 0.035 + Math.random() * 0.045,
        swaySpeed: 0.015 + Math.random() * 0.02,
        swayAmp: 0.08 + Math.random() * 0.12,
        swayAngle: Math.random() * Math.PI * 2,
        rotSpeedX: (Math.random() * 0.02 + 0.008) * (Math.random() > 0.5 ? 1 : -1),
        rotSpeedY: (Math.random() * 0.025 + 0.01) * (Math.random() > 0.5 ? 1 : -1),
        rotSpeedZ: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        initialX: mesh.position.x,
      };

      petalGroup.add(mesh);
      petals.push(mesh);
    }
    scene.add(petalGroup);

    // 3. Ethereal Anime Starlight & Firefly Embers
    const starCount = 480;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const starColor1 = darkMode ? new THREE.Color(0x38bdf8) : new THREE.Color(0x38bdf8); // Cyan starlight
    const starColor2 = darkMode ? new THREE.Color(0xf472b6) : new THREE.Color(0xf472b6); // Sakura ember
    const starColor3 = darkMode ? new THREE.Color(0xc084fc) : new THREE.Color(0x818cf8); // Violet spirit
    const starColor4 = darkMode ? new THREE.Color(0xfde047) : new THREE.Color(0xfbbf24); // Warm gold firefly

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 200;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 180;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 140;

      const rand = Math.random();
      const c =
        rand < 0.35
          ? starColor1
          : rand < 0.65
          ? starColor2
          : rand < 0.85
          ? starColor3
          : starColor4;
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: darkMode ? 1.6 : 1.1,
      vertexColors: true,
      transparent: true,
      opacity: darkMode ? 0.75 : 0.32,
      blending: darkMode ? THREE.AdditiveBlending : THREE.NormalBlending,
      sizeAttenuation: true,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 4. Floating Anime Diamond Crystal Stars (Prisms in deep perspective)
    const crystals = [];
    const crystalGeometries = [
      new THREE.OctahedronGeometry(3.6, 0), // Diamond Star
      new THREE.IcosahedronGeometry(3.0, 0), // Prismatic Gem
      new THREE.OctahedronGeometry(4.2, 0), // Crystal Shard
      new THREE.TorusGeometry(3.5, 0.5, 8, 24), // Celestial Halo
    ];

    const crystalColors = darkMode
      ? [0xf472b6, 0x38bdf8, 0xc084fc, 0x38bdf8]
      : [0xf472b6, 0x0284c7, 0x7c3aed, 0x38bdf8];

    crystalGeometries.forEach((geom, idx) => {
      const mat = new THREE.MeshBasicMaterial({
        color: crystalColors[idx % crystalColors.length],
        wireframe: true,
        transparent: true,
        opacity: darkMode ? 0.35 : 0.12,
      });

      const mesh = new THREE.Mesh(geom, mat);
      const angle = (idx / crystalGeometries.length) * Math.PI * 2;
      mesh.position.x = Math.cos(angle) * (46 + idx * 5);
      mesh.position.y = Math.sin(angle) * (28 + idx * 4);
      mesh.position.z = -20 - idx * 8;
      mesh.userData = {
        rotX: (Math.random() * 0.008 + 0.003) * (idx % 2 === 0 ? 1 : -1),
        rotY: (Math.random() * 0.008 + 0.003) * (idx % 2 === 0 ? -1 : 1),
        initialY: mesh.position.y,
      };

      scene.add(mesh);
      crystals.push(mesh);
    });

    // 5. Interactive Wind & Scroll Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, velX: 0 };
    let lastMouseX = 0;
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const handleMouseMove = (e) => {
      const normalizedX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetX = normalizedX;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
      mouse.velX = normalizedX - lastMouseX;
      lastMouseX = normalizedX;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!renderer || !canvas) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // 6. Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth mouse interpolation (lerp)
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;
        scrollY += (targetScrollY - scrollY) * 0.05;

        // Subtle 3D camera parallax
        camera.position.x = mouse.x * 10;
        camera.position.y = mouse.y * 8 - scrollY * 0.025;
        camera.lookAt(0, -scrollY * 0.025, 0);

        // 3D Sakura Petals Kinematics
        petals.forEach((p) => {
          const u = p.userData;

          // Falling motion
          p.position.y -= u.fallSpeed;

          // Wind sway
          u.swayAngle += u.swaySpeed;
          p.position.x += Math.sin(u.swayAngle) * u.swayAmp + mouse.velX * 0.4;

          // Tumbling 3D rotation
          p.rotation.x += u.rotSpeedX;
          p.rotation.y += u.rotSpeedY;
          p.rotation.z += u.rotSpeedZ;

          // Seamless loop when petal falls below screen
          if (p.position.y < -70) {
            p.position.y = 70 + Math.random() * 15;
            p.position.x = (Math.random() - 0.5) * 160;
            p.position.z = (Math.random() - 0.5) * 80;
          }
        });

        // Decay mouse velocity
        mouse.velX *= 0.95;

        // Gentle cosmic rotation of starlight embers
        starField.rotation.y = elapsedTime * 0.025 + mouse.x * 0.15;
        starField.rotation.x = elapsedTime * 0.012 - mouse.y * 0.1;

        // Animate floating crystal stars
        crystals.forEach((c) => {
          c.rotation.x += c.userData.rotX;
          c.rotation.y += c.userData.rotY;
          c.position.y = c.userData.initialY + Math.sin(elapsedTime * 1.4 + c.position.x) * 2.5;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      petalGeometry.dispose();
      petals.forEach((p) => p.material.dispose());
      starGeometry.dispose();
      starMaterial.dispose();
      crystalGeometries.forEach((g) => g.dispose());
      crystals.forEach((c) => c.material.dispose());
      renderer.dispose();
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      aria-hidden="true"
      style={{ display: "block" }}
    />
  );
}
