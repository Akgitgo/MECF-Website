"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type PointerEventHandler,
  type ReactNode,
} from "react";
import styles from "./SpotlightCard.module.css";

type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  spotlightColor?: string;
};

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(47, 156, 120, 0.14)",
  style,
  onPointerEnter,
  onPointerLeave,
  onPointerMove,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const rectRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handlePointerEnter: PointerEventHandler<HTMLDivElement> = (event) => {
    if (event.pointerType !== "touch") {
      rectRef.current = divRef.current?.getBoundingClientRect() ?? null;
    }

    onPointerEnter?.(event);
  };

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    if (event.pointerType === "touch") return;

    const rect = rectRef.current ?? divRef.current?.getBoundingClientRect();
    if (!rect) return;

    pointerRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(() => {
        const target = divRef.current;
        frameRef.current = null;
        if (!target) return;

        target.style.setProperty("--mouse-x", `${pointerRef.current.x}px`);
        target.style.setProperty("--mouse-y", `${pointerRef.current.y}px`);
      });
    }

    onPointerMove?.(event);
  };

  const handlePointerLeave: PointerEventHandler<HTMLDivElement> = (event) => {
    rectRef.current = null;
    onPointerLeave?.(event);
  };

  return (
    <div
      ref={divRef}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      className={`${styles.cardSpotlight} ${className}`}
      style={
        {
          "--spotlight-color": spotlightColor,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
}
