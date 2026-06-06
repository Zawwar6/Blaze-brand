"use client";
import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

export default function VapeHover() {
  const containerRef = useRef<HTMLDivElement>(null);
  const vapeRef = useRef<HTMLImageElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<gsap.core.Tween | null>(null);

  // Idle floating animation
  const startIdleAnimation = useCallback(() => {
    if (!vapeRef.current) return;
    
    gsap.to(vapeRef.current, {
      y: -20,
      rotationX: 8,
      rotationY: 5,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current || !vapeRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);

    // Clamp values
    const rotateY = Math.max(Math.min(mouseX * 18, 22), -22);
    const rotateX = Math.max(Math.min(-mouseY * 14, 18), -18);

    mouseRef.current = { x: mouseX, y: mouseY };

    if (animationRef.current) animationRef.current.kill();

    animationRef.current = gsap.to(vapeRef.current, {
      rotationX: rotateX,
      rotationY: rotateY,
      scale: 1.12,
      z: 60,
      duration: 0.6,
      ease: "power2.out",
    });

    // Dynamic shadow
    if (shadowRef.current) {
      gsap.to(shadowRef.current, {
        x: mouseX * 25,
        y: 40 + mouseY * 15,
        scale: 0.85 + Math.abs(mouseX) * 0.08,
        opacity: 0.75 - Math.abs(mouseY) * 0.15,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!vapeRef.current) return;

    // Stop idle animation
    gsap.killTweensOf(vapeRef.current);

    gsap.to(vapeRef.current, {
      filter: "drop-shadow(0 35px 60px rgba(100, 200, 255, 0.5)) brightness(1.15)",
      duration: 0.4,
    });

    document.addEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const handleMouseLeave = useCallback(() => {
    document.removeEventListener("mousemove", handleMouseMove);

    if (!vapeRef.current) return;

    if (animationRef.current) animationRef.current.kill();

    gsap.to(vapeRef.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      z: 0,
      filter: "drop-shadow(0 25px 45px rgba(0,0,0,0.65))",
      duration: 0.8,
      ease: "power3.out",
      onComplete: () => {
        startIdleAnimation();
      },
    });

    if (shadowRef.current) {
      gsap.to(shadowRef.current, {
        x: 0,
        y: 45,
        scale: 0.9,
        opacity: 0.65,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, [startIdleAnimation]);

  useEffect(() => {
    startIdleAnimation();
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [startIdleAnimation, handleMouseMove]);

  return (
    <div
      ref={containerRef}
      style={{
        perspective: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "radial-gradient(circle at center, #1a1a2e 0%, #0b0b0f 70%)",
        overflow: "hidden",
      }}
    >
      {/* Dynamic Shadow Layer */}
      <div
        ref={shadowRef}
        style={{
          position: "absolute",
          width: "320px",
          height: "80px",
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 20%, transparent 70%)",
          filter: "blur(18px)",
          borderRadius: "50%",
          zIndex: 1,
          top: "58%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <img
        ref={vapeRef}
        src="/assets/vape.png"
        alt="Vape Device"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "320px",
          height: "auto",
          transformStyle: "preserve-3d",
          cursor: "pointer",
          transition: "filter 0.3s ease",
          filter: "drop-shadow(0 25px 45px rgba(0,0,0,0.65))",
          zIndex: 2,
        }}
      />

      {/* Subtle glow ring */}
      <div
        style={{
          position: "absolute",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(120,220,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.6,
        }}
      />
    </div>
  );
}