import type { ReactNode } from "react";

const blobs: {
  color: string;
  w: number;
  h: number;
  top: string;
  left: string;
  anim: string;
  dur: string;
  blur: number;
  opacity: number;
  delay?: string;
}[] = [
  { color: "#c242bf", w: 1100, h: 1100, top: "-30%", left: "-15%",  anim: "lava-1", dur: "14s", blur: 150, opacity: 0.75 },
  { color: "#f97316", w: 1000, h: 1000, top: "25%",  left: "38%",   anim: "lava-2", dur: "17s", blur: 140, opacity: 0.65 },
  { color: "#7c3aed", w:  950, h:  950, top: "-20%", left: "48%",   anim: "lava-3", dur: "11s", blur: 130, opacity: 0.70 },
  { color: "#e11d48", w: 1050, h:  850, top: "45%",  left: "-20%",  anim: "lava-4", dur: "19s", blur: 160, opacity: 0.60 },
  { color: "#f59e0b", w:  800, h:  800, top: "10%",  left: "20%",   anim: "lava-5", dur: "13s", blur: 120, opacity: 0.55, delay: "2s" },
  { color: "#9e339c", w:  900, h:  950, top: "38%",  left: "55%",   anim: "lava-1", dur: "10s", blur: 130, opacity: 0.65, delay: "5s" },
];

export default function LavaBackground({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#1a0028] ${className ?? ""}`}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {blobs.map((b, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: b.w,
              height: b.h,
              borderRadius: "50%",
              background: b.color,
              filter: `blur(${b.blur}px)`,
              opacity: b.opacity,
              top: b.top,
              left: b.left,
              animation: `${b.anim} ${b.dur} ease-in-out infinite`,
              animationDelay: b.delay ?? "0s",
              mixBlendMode: "screen",
            }}
          />
        ))}
      </div>
      {children}
    </div>
  );
}
