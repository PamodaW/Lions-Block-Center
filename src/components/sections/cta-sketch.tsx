"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* Pencil sketch that is slowly "drawn" onto the blue background when scrolled into view. */
export function CtaSketch() {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`sketch${drawn ? " is-drawn" : ""}`}>
      <Image
        src="/images/cabana-sketch.webp"
        alt="Pencil sketch of an A-frame cabana on a timber deck"
        width={1086}
        height={1448}
        sizes="(max-width: 900px) 90vw, 520px"
        unoptimized
        priority={false}
      />
    </div>
  );
}
