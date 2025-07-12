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
  isMoving?: boolean;
  direction?: { x: number; y: number };
}

interface StarFieldProps {
  className?: string;
  starCount?: number;
  maxDistance?: number;
  interactionRadius?: number;
  movingStarCount?: number;
}

export function StarField({
  className = "",
  starCount = 150,
  maxDistance = 100,
  interactionRadius = 200,
  movingStarCount = 50,
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

    // Static stars (existing behavior)
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.5 + 0.1,
        originalX: Math.random() * canvas.width,
        originalY: Math.random() * canvas.height,
        isMoving: false,
      });
    }

    // Add moving stars
    for (let i = 0; i < movingStarCount; i++) {
      const direction = {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
      };

      // Normalize direction to ensure consistent speed
      const magnitude = Math.sqrt(
        direction.x * direction.x + direction.y * direction.y
      );
      direction.x /= magnitude;
      direction.y /= magnitude;

      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.4,
        speed: Math.random() * 0.5 + 0.2,
        originalX: Math.random() * canvas.width,
        originalY: Math.random() * canvas.height,
        isMoving: true,
        direction,
      });
    }

    starsRef.current = stars;

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [starCount, movingStarCount]);

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
        if (star.isMoving) {
          star.x += star.direction!.x * star.speed;
          star.y += star.direction!.y * star.speed;

          if (star.x < -50) star.x = canvas.width + 50;
          if (star.x > canvas.width + 50) star.x = -50;
          if (star.y < -50) star.y = canvas.height + 50;
          if (star.y > canvas.height + 50) star.y = -50;
        } else {
          const dx = mousePos.x - star.x;
          const dy = mousePos.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (isHovering && distance < interactionRadius) {
            const force = (interactionRadius - distance) / interactionRadius;
            const angle = Math.atan2(dy, dx);

            star.x += Math.cos(angle) * force * star.speed * 2;
            star.y += Math.sin(angle) * force * star.speed * 2;

            star.opacity = Math.min(1, star.opacity + force * 0.3);
            star.size = Math.min(3, star.size + force * 0.5);
          } else {
            const dx = star.originalX - star.x;
            const dy = star.originalY - star.y;
            star.x += dx * 0.02;
            star.y += dy * 0.02;

            star.opacity = Math.max(0.2, star.opacity * 0.98);
            star.size = Math.max(0.5, star.size * 0.98);
          }

          star.x = Math.max(0, Math.min(canvas.width, star.x));
          star.y = Math.max(0, Math.min(canvas.height, star.y));
        }

        ctx.save();
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#ffffff";
        ctx.shadowBlur = star.isMoving ? star.size * 3 : star.size * 2;

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
