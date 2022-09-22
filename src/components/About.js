import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);

  const el = useRef();

  useEffect(() => {
    gsap.from(".line p ", 1.5, {
      y: 300,
      ease: "power4.out",
      delay: 0.5,
      skewY: 11,
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        trigger: "#trigger",
      },
    });

    gsap.to("#bg", {
      backgroundColor: "#2dd4bf",
      ease: "Power4.out",
      scrollTrigger: {
        trigger: "#trigger",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(el.current, 1.5, {
      y: 200,
      ease: "power4.out",
      delay: 1.3,
      scrollTrigger: {
        trigger: "#trigger",
      },
    });
  }, []);

  return (
    <section className='mt-48 px-3 md:ml-28 lg:ml-60' id='about'>
      <div className='flex flex-col justify-center items-start mt-8 overflow-hidden '>
        <div className='text-2xl md:text-3xl font-light md:w-8/12 lg:w-7/12 lg:mr-5'>
          <div className='line overflow-hidden h-20 md:h-24'>
            <p>
              Hi! I am Daffa Putri Diyanta an Accounting from Jakarta,
              Indonesia.
            </p>
          </div>
          <div className='line overflow-hidden h-68 md:h-58'>
            <p>
              Born and raised in Jakarta i study and learning about Accounting,
              Management and some stuff related with Cashflow. I just love to
              make stuff, sometimes pretty serious and sometimes just for fun.
            </p>
          </div>
          <div
            className='line overflow-hidden h-32 md:h-28 pt-6 md:pt-8'
            id='trigger'
          >
            <p>
              send me a request for a work inquiries, or send me an{" "}
              <a href='/' className='underline'>
                email
              </a>{" "}
              if you want to talk with me!
            </p>
          </div>

          <div className='line overflow-hidden h-28 md:h-24 pt-8'>
            <p>
              You can also find me on{" "}
              <a href='/' className='underline'>
                Twitter
              </a>{" "}
              or{" "}
              <a href='/' className='underline'>
                Instagram
              </a>
              .
            </p>
          </div>
          <a href='/' className='inline-block underline pt-8 md:pt-0' ref={el}>
            Currently work at sinamon.
          </a>
        </div>
      </div>
    </section>
  );
}
