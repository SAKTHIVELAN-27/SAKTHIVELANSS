import { useRef, MouseEvent, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

const GlowCard = ({ children, className, style }: GlowCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={style}
      className={cn(
        "card-glow rounded-xl bg-card border border-border/50 p-6 transition-all duration-300 hover:border-primary/50",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlowCard;
