import { useState, useEffect, type ReactNode } from "react";

type Blob = {
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
};

const desktopBlobs: Blob[] = [
  { color: "#c242bf", w: 1100, h: 1100, top: "-30%", left: "-15%",  anim: "lava-1", dur: "14s", blur: 150, opacity: 0.75 },
  { color: "#f97316", w: 1000, h: 1000, top: "25%",  left: "38%",   anim: "lava-2", dur: "17s", blur: 140, opacity: 0.65 },
  { color: "#7c3aed", w:  950, h:  950, top: "-20%", left: "48%",   anim: "lava-3", dur: "11s", blur: 130, opacity: 0.70 },
  { color: "#e11d48", w: 1050, h:  850, top: "45%",  left: "-20%",  anim: "lava-4", dur: "19s", blur: 160, opacity: 0.60 },
  { color: "#f59e0b", w:  800, h:  800, top: "10%",  left: "20%",   anim: "lava-5", dur: "13s", blur: 120, opacity: 0.55, delay: "2s" },
  { color: "#9e339c", w:  900, h:  950, top: "38%",  left: "55%",   anim: "lava-1", dur: "10s", blur: 130, opacity: 0.65, delay: "5s" },
];

const mobileBlobs: Blob[] = [
  { color: "#c242bf", w: 500, h: 500, top: "-20%", left: "-10%",  anim: "lava-1", dur: "14s", blur: 70, opacity: 0.75 },
  { color: "#f97316", w: 450, h: 450, top: "30%",  left: "30%",   anim: "lava-2", dur: "17s", blur: 65, opacity: 0.65 },
  { color: "#7c3aed", w: 420, h: 420, top: "-15%", left: "45%",   anim: "lava-3", dur: "11s", blur: 60, opacity: 0.70 },
  { color: "#e11d48", w: 480, h: 380, top: "55%",  left: "-15%",  anim: "lava-4", dur: "19s", blur: 75, opacity: 0.60 },
  { color: "#f59e0b", w: 350, h: 350, top: "15%",  left: "15%",   anim: "lava-5", dur: "13s", blur: 55, opacity: 0.55, delay: "2s" },
  { color: "#9e339c", w: 400, h: 420, top: "45%",  left: "50%",   anim: "lava-1", dur: "10s", blur: 60, opacity: 0.65, delay: "5s" },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 768px)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

export default function LavaBackground({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const isMobile = useIsMobile();
  const blobs = isMobile ? mobileBlobs : desktopBlobs;

  return (
    <div className={`relative overflow-hidden bg-[#1a0028] ${className ?? ""}`}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {blobs.map((b, i) => (
          <div
            key={i}
            className="lava-blob"
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
              willChange: "transform",
            }}
          />
        ))}
      </div>
      {children}
    </div>
  );
}
