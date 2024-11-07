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

const cards = [
  {
    title: "Technology",
    sector: "Sector",
    description:
      "Tech companies often face challenges with technology integration and effective digital marketing, which can slow down growth. We streamline operations, enhance automation, and improve overall efficiency.",
    businesses: [
      ["SaaS & PaaS Providers", "IT Services & Consulting"],
      ["Cloud Computing & Hosting", "Cybersecurity"],
      ["AI & Machine Learning", "Emerging Tech Startups"],
      ["Data Analytics & Big Data"],
    ],
    images: [
      "https://images.unsplash.com/photo-1530825894095-9c184b068fcb?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1633315752151-8e49885d1142?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    url: "#technology",
  },
  {
    title: "Technology",
    sector: "Sector",
    description:
      "Tech companies often face challenges with technology integration and effective digital marketing, which can slow down growth. We streamline operations, enhance automation, and improve overall efficiency.",
    businesses: [
      ["SaaS & PaaS Providers", "IT Services & Consulting"],
      ["Cloud Computing & Hosting", "Cybersecurity"],
      ["AI & Machine Learning", "Emerging Tech Startups"],
      ["Data Analytics & Big Data"],
    ],
    images: [
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    url: "#technology",
  },
  {
    title: "Technology",
    sector: "Sector",
    description:
      "Tech companies often face challenges with technology integration and effective digital marketing, which can slow down growth. We streamline operations, enhance automation, and improve overall efficiency.",
    businesses: [
      ["SaaS & PaaS Providers", "IT Services & Consulting"],
      ["Cloud Computing & Hosting", "Cybersecurity"],
      ["AI & Machine Learning", "Emerging Tech Startups"],
      ["Data Analytics & Big Data"],
    ],
    images: [
      "https://images.unsplash.com/photo-1692827356350-ca6b7166dbe8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1692827355562-c76b024de0b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1685914963658-11d4c18527c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    url: "#technology",
  },
  {
    title: "Technology",
    sector: "Sector",
    description:
      "Tech companies often face challenges with technology integration and effective digital marketing, which can slow down growth. We streamline operations, enhance automation, and improve overall efficiency.",
    businesses: [
      ["SaaS & PaaS Providers", "IT Services & Consulting"],
      ["Cloud Computing & Hosting", "Cybersecurity"],
      ["AI & Machine Learning", "Emerging Tech Startups"],
      ["Data Analytics & Big Data"],
    ],
    images: [
      "https://images.unsplash.com/photo-1644766464511-3b364cd8a6e8?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1477039181047-efb4357d01bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    url: "#technology",
  },
];

const Card = ({
  i,
  title,
  sector,
  description,
  businesses,
  images,
  url,
  progress,
  range,
  targetScale,
}: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setNextImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="w-full max-w-7xl aspect-[2/1] rounded-[32px] overflow-hidden relative bg-white"
      >
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{ scale: imageScale }}
            >
              <Image
                src={images[currentImageIndex]}
                alt={`${title} sector`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 opacity-0">
            <Image
              src={images[nextImageIndex]}
              alt={`${title} sector (preload)`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent w-[85%]" />
        <div className="relative h-full flex">
          <div className="w-[45%] p-12 text-white flex flex-col">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-6xl font-light tracking-tight">{title}</h2>
                <p className="text-3xl font-light text-white/70 mt-1">
                  {sector}
                </p>
              </div>
              <MagneticButton>
                <div className="rounded-full bg-white/10 p-5 h-20 w-20 flex items-center justify-center">
                  <Image
                    src={"/building.svg"}
                    width={36}
                    height={36}
                    alt="building-icon"
                  />
                </div>
              </MagneticButton>
            </div>
            <p className="mt-6 text-white/90 text-base font-light leading-relaxed">
              {description}
            </p>
            <div className="mt-8">
              <h3 className="text-orange-500 font-medium mb-4">
                Businesses We Work With
              </h3>
              <div className="space-y-3">
                {businesses.map((group: any, index: number) => (
                  <div key={index} className="text-md text-white/70 font-light">
                    {group.join(" ● ")}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-auto flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-white hover:text-white/90 p-0 h-auto font-medium hover:bg-transparent"
                asChild
              >
                <a
                  href={url}
                  className="flex items-center font-light underline decoration-orange-600 decoration underline-offset-4 decoration-2"
                >
                  Explore Your Sector
                  <ArrowRight className=" h-4 w-4 text-orange-600" />
                </a>
              </Button>
              <MagneticButton>
                {/* <AnimatedButton /> */}

                <AnimatedArrowButton />
              </MagneticButton>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

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
      <div className="  flex items-start justify-between px-6 md:px-8 lg:px-16 py-24">
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
