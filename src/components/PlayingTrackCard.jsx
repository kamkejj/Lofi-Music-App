/* eslint-disable react/prop-types */

const PlayingTrackCard = ({ track, isPlaying, onPlayPause }) => {
  if (!track) return null;

  return (
    <div className="mb-5 animate-fade-in">
      <div
        className="relative overflow-hidden rounded-xl cursor-pointer group"
        onClick={onPlayPause}
      >
        <img
          src={`/assets/background/${track.src}.gif`}
          alt={track.name}
          className="w-full h-36 sm:h-44 object-cover brightness-[0.45] group-hover:brightness-[0.35] transition-all duration-300"
        />

        <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-10">
          <div className="flex items-center gap-4 sm:gap-6 min-w-0">
            <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden ring-2 ring-green-400/50 shadow-lg shadow-green-500/20">
              <img
                src={`/assets/background/${track.src}.gif`}
                alt={track.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-white font-semibold text-lg sm:text-xl truncate">
                  {track.name}
                </h2>
                {isPlaying ? (
                  <img
                    src="/assets/music-playing-animation.gif"
                    alt="Playing"
                    width={22}
                    height={12}
                    className="invert shrink-0"
                  />
                ) : null}
              </div>
              <p className="text-gray-300 text-sm mt-0.5">{track.desc}</p>
              <span className="inline-block mt-2 text-xs text-green-400 font-medium tracking-wide uppercase">
                Now Playing
              </span>
            </div>
          </div>

          <button
            type="button"
            className="shrink-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
            aria-label={isPlaying ? "Pause track" : "Play track"}
            onClick={(event) => {
              event.stopPropagation();
              onPlayPause();
            }}
          >
            {isPlaying ? (
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayingTrackCard;
