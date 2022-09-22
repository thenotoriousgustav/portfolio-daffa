import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#header",
      pin: "#content",
      start: "top top",
      endtrigger: "#img-wrap",
      //end: 'bottom top-=' + window.innerHeight,
      // end: () => "bottom top-=" + window.innerHeight,
      end: "bottom top",
    });
  });

  return (
    <header
      className='relative md:max-w-5xl lg:max-w-6xl mx-auto min-h-screen pt-56 md:pt-56 lg:pt-36 overflow-hidden mb-36'
      id='header'
    >
      <div className='text-center z-0' id='content'>
        <h1 className='text-9xl md:text-[16rem] lg:text-[22rem] font-pupok text-pink-500'>
          DAFFA
        </h1>
        <h1 className='text-9xl md:text-[16rem] lg:text-[22rem] font-pupok text-teal-200 -z-10 top-1 left-3 lg:top-2 absolute lg:left-6'>
          DAFFA
        </h1>
      </div>

      <div
        class='absolute left-0 bottom-0 md:bottom-14 lg:bottom-8 z-10 overflow-hidden flex justify-center w-full'
        id='img-wrap'
      >
        <img
          src='assets/images/b.jpg'
          alt='ismage'
          className='w-full h-[600px] md:h-[700px] lg:h-[600px] object-cover'
        ></img>
      </div>
    </header>
  );
}
