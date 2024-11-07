import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const AnimatedArrowButton = () => {
  return (
    <Button
      className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
      asChild
    >
      <a href="#consultation">
        Book Free Consultation
        <AnimatedArrowIcon />
      </a>
    </Button>
  );
};

const AnimatedArrowIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.21 21.88"
      initial={{ translateY: 0 }}
      animate={{ translateY: [0, 6, 0] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <style>{`.cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:2px;}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="Layer_1-2-2" data-name="Layer 1-2">
            <path
              className="cls-1"
              d="M16.87,1,.78,21.26M16.87,1,5.48,2.26M16.87,1l1.35,11.39"
            />
          </g>
        </g>
      </g>
    </motion.svg>
  );
};

export default AnimatedArrowButton;
