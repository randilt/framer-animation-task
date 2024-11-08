"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, Building2, Magnet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lenis from "lenis";
import BiggerDot from "@/components/BigDot";
import AnimatedButton from "@/components/AnimatedButton";
import MagneticButton from "@/components/FramerMagneticButton";
import AnimatedArrowButton from "@/components/AnimatedButton";
import Card from "@/components/Card";
import { cards } from "@/data";

export default function Component() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={container} className="bg-white">
      <div className="  flex items-start justify-between px-6 md:px-12 lg:px-20 py-24 md:flex-row flex-col md:gap-0 gap-8">
        <div className="max-w-2xl flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight">
            <span className="flex items-center gap-4">
              {" "}
              Specialized Expertise{" "}
              <img src="/SVG/down.svg" alt="" className="w-4 h-auto" />
            </span>{" "}
            in Key Sectors{" "}
          </h1>
        </div>
        <p className="text-md text-zinc-600 max-w-xl">
          We focus only on selected sectors where our deep expertise and
          experience offer a significant advantage. Our extensive work in these
          industries means we understand their unique challenges and
          opportunities, giving you the benefit of partnering with an expert who
          truly knows your business.
        </p>
      </div>
      {cards.map((card, i) => {
        const targetScale = 1 - (cards.length - i) * 0.05;
        return (
          <Card
            key={`card_${i}`}
            i={i}
            {...card}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
