import React, { useRef, useState } from "react";

/**
 * Tilt3DCard
 * Wrapper component providing authentic 3D perspective tilt,
 * multi-layered depth parallax, and dynamic cursor-following specular sheen.
 */
export default function Tilt3DCard({
  children,
  className = "",
  maxTilt = 10,
  scale = 1.015,
  glare = true,
  ...props
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, sheenX: 50, sheenY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    const sheenX = (x / rect.width) * 100;
    const sheenY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, sheenX, sheenY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, sheenX: 50, sheenY: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 relative preserve-3d transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${scale}, ${scale}, ${scale})`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: isHovered
          ? "transform 0.08s ease-out"
          : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
      {...props}
    >
      {children}

      {/* Dynamic Cursor Specular 3D Reflection Glare */}
      {glare && isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${tilt.sheenX}% ${tilt.sheenY}%, rgba(255,255,255,0.22) 0%, rgba(56,189,248,0.12) 35%, transparent 65%)`,
          }}
        />
      )}
    </div>
  );
}
