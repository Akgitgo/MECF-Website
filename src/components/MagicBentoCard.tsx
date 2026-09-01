import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
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
  style,
  enableTilt: _enableTilt,
  enableBorderGlow: _enableBorderGlow,
  clickEffect: _clickEffect,
  ...props
}: MagicBentoCardProps) {
  return (
    <div
      className={`${styles.magicBentoCard} ${className}`}
      style={
        {
          "--bento-glow-color": glowColor,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
}
