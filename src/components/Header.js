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
      // end: "bottom top-=" + window.innerHeight,
      // end: () => "bottom top-=" + window.innerHeight,
      end: "center 30%",
      markers: "true",
    });
  });

  return (
    <header
      className='relative md:max-w-5xl lg:max-w-6xl mx-auto min-h-screen lg:min-h-[200vh] pt-48 md:pt-56 lg:pt-20 overflow-hidden'
      id='header'
    >
      <div className='text-center z-0' id='content'>
        <h1 className='text-[7rem] md:text-[16rem] lg:text-[22rem] font-pupok text-pink-500'>
          DAFFA
        </h1>
        <h1 className='text-[7rem] md:text-[16rem] lg:text-[22rem] font-pupok text-teal-200 -z-10 top-2 left-4 lg:top-2 absolute lg:left-6'>
          DAFFA
        </h1>
      </div>

      <div
        class='absolute left-0 bottom-36 md:bottom-14 lg:bottom-36 z-10 overflow-hidden flex justify-center w-full px-2'
        id='img-wrap'
      >
        <img
          src='assets/images/b.jpg'
          alt='ismage'
          className='w-full h-[300px] md:h-[700px] lg:h-[600px] object-cover'
        ></img>
      </div>
    </header>
  );
}
