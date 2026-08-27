"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type MouseEvent,
  type PointerEventHandler,
  type ReactNode,
} from "react";
import styles from "./MagicBentoCard.module.css";

type MagicBentoCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  glowColor?: string;
  enableTilt?: boolean;
  enableBorderGlow?: boolean;
  clickEffect?: boolean;
};

export default function MagicBentoCard({
  children,
  className = "",
  glowColor = "47, 156, 120",
  enableTilt = true,
  enableBorderGlow = true,
  clickEffect = true,
  style,
  onPointerEnter,
  onPointerLeave,
  onPointerMove,
  onClick,
  ...props
}: MagicBentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
  const [ripple, setRipple] = useState<{ x: number; y: number; size: number; id: number } | null>(null);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const shouldSkipMotion = (event: Parameters<PointerEventHandler<HTMLDivElement>>[0]) =>
    event.pointerType === "touch" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handlePointerEnter: PointerEventHandler<HTMLDivElement> = (event) => {
    if (!shouldSkipMotion(event)) {
      rectRef.current = cardRef.current?.getBoundingClientRect() ?? null;
    }

    onPointerEnter?.(event);
  };

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    if (shouldSkipMotion(event)) return;

    const rect = rectRef.current ?? cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const relativeX = (x / rect.width) * 100;
    const relativeY = (y / rect.height) * 100;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    pointerRef.current = {
      x: relativeX,
      y: relativeY,
      rotateX: enableTilt ? ((y - centerY) / centerY) * -7 : 0,
      rotateY: enableTilt ? ((x - centerX) / centerX) * 7 : 0,
    };

    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(() => {
        const card = cardRef.current;
        frameRef.current = null;
        if (!card) return;

        card.style.setProperty("--bento-x", `${pointerRef.current.x}%`);
        card.style.setProperty("--bento-y", `${pointerRef.current.y}%`);
        card.style.setProperty("--bento-rotate-x", `${pointerRef.current.rotateX}deg`);
        card.style.setProperty("--bento-rotate-y", `${pointerRef.current.rotateY}deg`);
      });
    }

    onPointerMove?.(event);
  };

  const handlePointerLeave: PointerEventHandler<HTMLDivElement> = (event) => {
    rectRef.current = null;
    const card = cardRef.current;

    if (card) {
      card.style.setProperty("--bento-rotate-x", "0deg");
      card.style.setProperty("--bento-rotate-y", "0deg");
    }

    onPointerLeave?.(event);
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (clickEffect && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const rect = cardRef.current?.getBoundingClientRect();
      if (rect) {
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const size = Math.max(
          Math.hypot(x, y),
          Math.hypot(x - rect.width, y),
          Math.hypot(x, y - rect.height),
          Math.hypot(x - rect.width, y - rect.height),
        ) * 2;

        setRipple({ x, y, size, id: Date.now() });
      }
    }

    onClick?.(event);
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      className={`${styles.magicBentoCard} ${enableBorderGlow ? styles.borderGlow : ""} ${className}`}
      style={
        {
          "--bento-glow-color": glowColor,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      <span className={styles.particleOne} />
      <span className={styles.particleTwo} />
      <span className={styles.particleThree} />
      <span className={styles.particleFour} />
      <span className={styles.particleFive} />
      {ripple && (
        <span
          key={ripple.id}
          className={styles.ripple}
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
          }}
          onAnimationEnd={() => setRipple(null)}
        />
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
