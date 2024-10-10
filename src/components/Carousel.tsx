"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode, useCallback } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

export default function Carousel({ children }: { children: ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: 0,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  return (
    <div className="embla">
      <div
        className="z-10 font-bold rounded-full absolute top-[100px] left-0 p-3 back bg-black cursor-pointer bg-opacity-50"
        onClick={() => scrollPrev()}
      >
        <GrCaretPrevious color="white" size={20} />
      </div>
      <div className="embla--viewport mx-auto" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
      <div
        className="z-10 font-bold rounded-full absolute top-[100px] right-0 p-3 back bg-black cursor-pointer bg-opacity-50"
        onClick={() => scrollNext()}
      >
        <GrCaretNext color="white" size={20} />
      </div>
    </div>
  );
}
