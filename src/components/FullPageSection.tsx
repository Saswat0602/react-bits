// src/components/FullPageSection.tsx
import React from "react";
import MetaBalls from "../react-bits/MetaBalls";

interface FullPageSectionProps {
  title: string;
}

const FullPageSection: React.FC<FullPageSectionProps> = ({ title }) => {
  return (
    <section className="h-screen bg-black-100 flex items-center justify-center text-white text-center">
      <div>
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="mt-4 text-zinc-400">This section takes the full height of the screen!</p>
        <MetaBalls
          color="#ffffff"
          cursorBallColor="#ffffff"
          cursorBallSize={2}
          ballCount={15}
          animationSize={30}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.05}
          clumpFactor={1}
          speed={0.3}
        />      </div>
    </section>
  );
};

export default FullPageSection;
