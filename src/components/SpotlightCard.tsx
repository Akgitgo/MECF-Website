import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import styles from "./SpotlightCard.module.css";

type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  spotlightColor?: string;
};

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(47, 156, 120, 0.1)",
  style,
  ...props
}: SpotlightCardProps) {
  return (
    <div
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
