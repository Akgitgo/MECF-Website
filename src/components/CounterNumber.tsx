"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

interface CounterNumberProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  animateOnHover?: boolean;
}

export default function CounterNumber({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 900,
  className = "",
  animateOnHover = false,
}: CounterNumberProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animFrameId = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);

  const startCounterAnimation = useCallback((force = false) => {
    if (!force && hasAnimatedRef.current) return;

    if (animFrameId.current) {
      cancelAnimationFrame(animFrameId.current);
    }

    hasAnimatedRef.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }

    let startTime: number | null = null;
    const startVal = 0;
    const endVal = value;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Smooth decelerating cubic ease-out curve
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = startVal + (endVal - startVal) * easedProgress;

      setCount(currentVal);

      if (progress < 1) {
        animFrameId.current = requestAnimationFrame(animate);
      } else {
        animFrameId.current = null;
        setCount(endVal);
      }
    };

    animFrameId.current = requestAnimationFrame(animate);
  }, [value, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setCount(value);
      hasAnimatedRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          startCounterAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [startCounterAnimation]);

  const handleMouseEnter = () => {
    if (animateOnHover) {
      startCounterAnimation(true);
    }
  };

  const formattedValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString("en-IN");

  return (
    <span
      ref={ref}
      onMouseEnter={animateOnHover ? handleMouseEnter : undefined}
      className={`inline-block select-none ${animateOnHover ? "cursor-pointer" : ""} ${className}`}
    >
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
