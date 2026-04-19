"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

const PARALLAX_RATE = 0.36;
const MOBILE_MQ = "(max-width: 767px)";

type ParallaxSectionBgProps = {
  imageSrc: string;
  children: ReactNode;
  className?: string;
  /** Cor do véu por cima da foto (ex.: branco semitransparente) */
  overlayColor?: string;
};

export function ParallaxSectionBg({
  imageSrc,
  children,
  className,
  overlayColor = "rgba(255, 255, 255, 0.55)",
}: ParallaxSectionBgProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mqMobile = window.matchMedia(MOBILE_MQ);
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const compute = () => {
      if (mqMobile.matches || mqReduce.matches) {
        setParallaxY(0);
        return;
      }
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerDistance =
        rect.top + rect.height / 2 - window.innerHeight / 2;
      setParallaxY(-centerDistance * PARALLAX_RATE);
    };

    const schedule = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        compute();
      });
    };

    compute();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    mqMobile.addEventListener("change", schedule);
    mqReduce.addEventListener("change", schedule);

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      mqMobile.removeEventListener("change", schedule);
      mqReduce.removeEventListener("change", schedule);
    };
  }, []);

  const coverStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: "cover" as const,
    backgroundPosition: "center" as const,
    backgroundRepeat: "no-repeat" as const,
  };

  return (
    <section
      ref={sectionRef}
      className={cn("relative isolate overflow-hidden", className)}
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 block md:hidden" style={coverStyle} />
        <div className="absolute inset-0 hidden overflow-hidden md:block motion-reduce:hidden">
          <div
            className="absolute left-1/2 top-1/2 h-[135%] min-h-[115%] w-[min(140vw,140%)] max-w-none will-change-transform"
            style={{
              ...coverStyle,
              transform: `translate(-50%, calc(-50% + ${parallaxY}px))`,
            }}
          />
        </div>
        <div
          className="absolute inset-0 hidden md:motion-reduce:block"
          style={coverStyle}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ backgroundColor: overlayColor }}
        aria-hidden
      />

      <div className="relative z-10">{children}</div>
    </section>
  );
}
