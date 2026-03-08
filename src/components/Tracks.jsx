import TrackCard from "@/components/TrackCard";
import HorizontalScrollWithArrows from "@/components/HorizontalScrollWithArrows";
import tracksData from "../data/tracks";
import useAudioPlayer from "../lib/useAudioPlayer";

/**
 * Renders the Tracks component.
 *
 * @returns {JSX.Element} The rendered Tracks component.
 */
const Tracks = () => {
  const { isPlaying, handleClick, trackIdPlaying } = useAudioPlayer();

  return (
    <>
      <div id="track-section" className="text-center md:lg:text-left">
        <h1 className="text-gray-400 font-medium text-xl bg-slate-800 bg-opacity-50 rounded-full inline-block px-5 py-2 ">
          Tracks
        </h1>
        <HorizontalScrollWithArrows contentClassName="lg:justify-between">
          {tracksData.map((track, index) => {
            return (
              <TrackCard
                key={index}
                src={track.src}
                name={track.name}
                desc={track.desc}
                sound={track.sound}
                onClick={handleClick}
                id={index}
                playingStatus={isPlaying}
                trackPlaying={trackIdPlaying.current}
              />
            );
          })}
        </HorizontalScrollWithArrows>
      </div>
    </>
  );
};

export default Tracks;
