import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TextScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const scroll = useRef();
  const scroll1 = useRef();

  // window.onscroll = function () {
  //   window.scrollTo(0, window.scrollY);
  // };

  useEffect(() => {
    gsap.to(scroll.current, {
      xPercent: 152,
      scrollTrigger: {
        trigger: "#scroll",
        toggleActions: "play pause reverse pause",
        start: "-=200 bottom",
        end: "end top",
        scrub: 1,
      },
    });
    gsap.to(scroll1.current, {
      xPercent: -152,
      overflowX: "hidden",
      scrollTrigger: {
        trigger: "#scroll",
        toggleActions: "play pause reverse pause",
        start: "-=200 bottom",
        end: "end top",
        scrub: 1,
      },
    });
  });

  return (
    <div className='overflow-hidden overflox-x-hidden w-full'>
      <div className='relative h-60 md:h-72' id='scroll'>
        <h2
          ref={scroll}
          className='text-3xl md:text-8xl absolute bottom-32 md:bottom-44 -left-full '
        >
          DAFFA PUTRI DIYANTA
        </h2>
        <div className='border-b-4 border-black max-w-xs md:max-w-3xl lg:max-w-5xl absolute left-9 bottom-28 md:left-28 md:bottom-36 w-full'></div>

        <h2
          ref={scroll1}
          className='text-3xl md:text-8xl absolute bottom-16 -right-full md:bottom-6 overflow-hidden'
        >
          DAFFA PUTRI DIYANTA
        </h2>
      </div>
    </div>
  );
}
