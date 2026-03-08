//card component for effects

import MusicCard from "@/components/EffectCard";
import HorizontalScrollWithArrows from "@/components/HorizontalScrollWithArrows";
import effectsData from "../data/effects";

/**
 * Renders the Effects component.
 * @returns {JSX.Element} The rendered Effects component.
 */
const Effects = () => {
  return (
    <div className="text-center md:lg:text-left">
      <h1 className="text-gray-400 font-medium text-xl bg-slate-800 bg-opacity-50 rounded-full inline-block px-5 py-2 my-5">
        Effects
      </h1>
      <HorizontalScrollWithArrows contentClassName="lg:justify-between p-1">
        {effectsData.map((effect, index) => {
          return (
            <MusicCard
              key={index}
              type={effect.type}
              name={effect.name}
              sound={effect.sound}
              src={effect.src}
            />
          );
        })}
      </HorizontalScrollWithArrows>
    </div>
  );
};

export default Effects;
