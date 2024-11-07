import React from "react";

interface BiggerDotProps {
  items: string[];
}

const BiggerDot: React.FC<BiggerDotProps> = ({ items }) => {
  return (
    <div className="text-md text-white/70">
      {items.join(`<span className="text-5xl text-white/90 mx-1">•</span>`)}
    </div>
  );
};

export default BiggerDot;
