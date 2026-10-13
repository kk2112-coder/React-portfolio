import React, { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * GSAP Scroll-Linked Top Progress Bar
 * Uses GSAP tweening linked to window scrollYProgress -> scaleX.
 */
export function ScrollProgressBar() {
  const barRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;

      if (barRef.current) {
        gsap.to(barRef.current, {
          scaleX: progress,
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          opacity: progress > 0.01 ? 1 : 0,
          duration: 0.3,
          overwrite: "auto",
        });
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      data-testid="scroll-progress-bar"
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none overflow-hidden"
    >
      <div
        ref={barRef}
        style={{
          transformOrigin: "0% 50%",
          transform: "scaleX(0)",
          willChange: "transform",
        }}
        className="w-full h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 shadow-[0_0_12px_rgba(34,211,238,0.85)]"
      />
      <div
        ref={glowRef}
        style={{ opacity: 0 }}
        className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-pink-500/30 blur-[4px]"
      />
    </div>
  );
}

/**
 * GSAP Scroll-Triggered Reveal Component
 * Animates elements smoothly into view using GSAP when they enter the viewport.
 */
export function ScrollReveal({
  children,
  variant = "fade-up", // "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "blur-in" | "3d-flip"
  delay = 0,
  duration = 650,
  once = false,
  amount = 0.12,
  className = "",
  style = {},
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1, rotationX: 0, clearProps: "filter" });
      return;
    }

    const getHiddenVars = () => {
      switch (variant) {
        case "fade-down":
          return { opacity: 0, y: -26, x: 0, scale: 0.98, rotationX: 0 };
        case "fade-left":
          return { opacity: 0, x: -28, y: 0, scale: 0.98, rotationX: 0 };
        case "fade-right":
          return { opacity: 0, x: 28, y: 0, scale: 0.98, rotationX: 0 };
        case "scale-up":
          return { opacity: 0, y: 18, x: 0, scale: 0.92, rotationX: 0 };
        case "3d-flip":
          return {
            opacity: 0,
            y: 24,
            x: 0,
            scale: 0.96,
            rotationX: 12,
            transformPerspective: 900,
          };
        case "blur-in":
          return { opacity: 0, y: 16, x: 0, scale: 0.97, rotationX: 0 };
        case "fade-up":
        default:
          return { opacity: 0, y: 26, x: 0, scale: 0.98, rotationX: 0 };
      }
    };

    const visibleVars = {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: duration / 1000,
      delay: delay / 1000,
      ease: "power3.out",
      overwrite: "auto",
    };

    // Check if element is already in initial viewport on mount so above-the-fold layout is immediate
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1, rotationX: 0 });
      if (once) return;
    } else {
      gsap.set(el, getHiddenVars());
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(el, visibleVars);
          if (once) observer.unobserve(el);
        } else if (!once) {
          gsap.to(el, {
            ...getHiddenVars(),
            duration: 0.35,
            delay: 0,
            ease: "power2.inOut",
            overwrite: "auto",
          });
        }
      },
      {
        threshold: amount,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      gsap.killTweensOf(el);
    };
  }, [variant, delay, duration, once, amount]);

  return (
    <div ref={ref} className={className} style={{ willChange: "opacity, transform", ...style }}>
      {children}
    </div>
  );
}

/**
 * GSAP Scroll-Linked Parallax Wrapper
 * Smoothly shifts child elements vertically using GSAP as they scroll through the viewport.
 */
export function ScrollParallax({ children, offset = 24, className = "" }) {
  const ref = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const handleScroll = () => {
      if (!ref.current || !innerRef.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;
      const centerOffset =
        (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2);
      const clamped = Math.max(-1.2, Math.min(1.2, centerOffset));
      const targetY = clamped * offset;

      gsap.to(innerRef.current, {
        y: targetY,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (innerRef.current) gsap.killTweensOf(innerRef.current);
    };
  }, [offset]);

  return (
    <div ref={ref} className={className}>
      <div ref={innerRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
