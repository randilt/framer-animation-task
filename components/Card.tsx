"use client";

import {
  AnimatePresence,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MagneticButton from "./FramerMagneticButton";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedArrowButton from "./AnimatedButton";

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
      className="h-screen flex items-center justify-center sticky top-4 md:top-0"
    >
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="w-full max-w-6xl aspect-[1/2] md:aspect-[2/1] rounded-[32px] overflow-hidden relative bg-white"
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
                <p className="md:hidden block mt-6 text-white/90 text-base font-light leading-relaxed">
                  {description}
                </p>
                <div className="mt-8">
                  <h3 className="text-orange-500 font-medium mb-4">
                    Businesses We Work With
                  </h3>
                  <div className="space-y-3">
                    {businesses.map((group: any, index: number) => (
                      <div
                        key={index}
                        className="text-md text-white/70 font-light"
                      >
                        {group.join(" ● ")}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex md:flex-row flex-col items-start gap-8 ">
                  <Button
                    variant="ghost"
                    className="text-white md:block  hover:text-white/90 p-0 h-auto font-medium hover:bg-transparent"
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
                  <div className="">
                    <MagneticButton>
                      {/* <AnimatedButton /> */}

                      <AnimatedArrowButton />
                    </MagneticButton>
                  </div>
                </div>
              </div>
              <MagneticButton>
                <div className="rounded-full bg-white/10 p-3 w-12 h-12 md:ml-0 ml-4 md:p-5 md:h-20 md:w-20 flex items-center justify-center">
                  <Image
                    src={"/building.svg"}
                    width={36}
                    height={36}
                    alt="building-icon"
                  />
                </div>
              </MagneticButton>
            </div>
            <p className="hidden md:block mt-6 text-white/90 text-base font-light leading-relaxed">
              {description}
            </p>
            <div className="mt-8 md:block hidden">
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
            <div className="mt-auto hidden md:flex md:flex-row flex-col items-center gap-4">
              <Button
                variant="ghost"
                className="text-white md:block hidden hover:text-white/90 p-0 h-auto font-medium hover:bg-transparent"
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
              <div className="ml-16 md:mt-0 mt-8 md:ml-0">
                <MagneticButton>
                  {/* <AnimatedButton /> */}

                  <AnimatedArrowButton />
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
