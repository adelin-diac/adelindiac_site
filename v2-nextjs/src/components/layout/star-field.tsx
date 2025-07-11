"use client";

import React, { useEffect, useRef, useState } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  originalX: number;
  originalY: number;
}

interface StarFieldProps {
  className?: string;
  starCount?: number;
  maxDistance?: number;
  interactionRadius?: number;
}

export function StarField({
  className = "",
  starCount = 150,
  maxDistance = 100,
  interactionRadius = 200,
}: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(null);

  // Initialize stars
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate stars
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.5 + 0.1,
        originalX: Math.random() * canvas.width,
        originalY: Math.random() * canvas.height,
      });
    }
    starsRef.current = stars;

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [starCount]);

  // Mouse event handlers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const stars = starsRef.current;
      if (!stars) return;

      stars.forEach((star) => {
        // Calculate distance from mouse
        const dx = mousePos.x - star.x;
        const dy = mousePos.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Apply interaction if mouse is near
        if (isHovering && distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          const angle = Math.atan2(dy, dx);

          // Move star away from cursor
          star.x += Math.cos(angle) * force * star.speed * 2;
          star.y += Math.sin(angle) * force * star.speed * 2;

          // Increase opacity and size when near cursor
          star.opacity = Math.min(1, star.opacity + force * 0.3);
          star.size = Math.min(3, star.size + force * 0.5);
        } else {
          // Gradually return to original position
          const dx = star.originalX - star.x;
          const dy = star.originalY - star.y;
          star.x += dx * 0.02;
          star.y += dy * 0.02;

          // Reset opacity and size
          star.opacity = Math.max(0.2, star.opacity * 0.98);
          star.size = Math.max(0.5, star.size * 0.98);
        }

        // Keep stars within bounds
        star.x = Math.max(0, Math.min(canvas.width, star.x));
        star.y = Math.max(0, Math.min(canvas.height, star.y));

        // Draw star
        ctx.save();
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#ffffff";
        ctx.shadowBlur = star.size * 2;

        // Draw star as a small circle with glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos, isHovering, interactionRadius]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ background: "transparent" }}
    />
  );
}
