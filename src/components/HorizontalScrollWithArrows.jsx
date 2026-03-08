import { useRef, useState, useCallback, useEffect } from "react";

const SCROLL_AMOUNT = 320;

/**
 * Translucent left/right arrow buttons that scroll the container on mouse click.
 */
const HorizontalScrollWithArrows = ({ children, className = "", contentClassName = "" }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows);
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, [updateArrows]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * SCROLL_AMOUNT, behavior: "smooth" });
  };

  const arrowBase =
    "absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer select-none transition-opacity duration-200 hover:opacity-100";
  const arrowBg =
    "bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/60";

  return (
    <div className={`relative ${className}`}>
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scroll(-1)}
          onMouseDown={(e) => e.preventDefault()}
          className={`left-2 ${arrowBase} ${arrowBg} opacity-90`}
          aria-label="Scroll left"
        >
          <svg
            className="w-6 h-6 text-white drop-shadow-md"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => scroll(1)}
          onMouseDown={(e) => e.preventDefault()}
          className={`right-2 ${arrowBase} ${arrowBg} opacity-90`}
          aria-label="Scroll right"
        >
          <svg
            className="w-6 h-6 text-white drop-shadow-md"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
      <div
        ref={scrollRef}
        className={`flex items-center gap-5 overflow-x-auto scroll-smooth ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrollWithArrows;
