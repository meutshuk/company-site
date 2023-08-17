import { useRef } from "react";
import "./marquee.scss";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const WORD = "Utshuk Raj Dhamala Apple Ball Cat";

export const Marquee = () => {
  const icons = useRef();
  const sentence = useRef();

  // 2. Defining Variants
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };

  // let timeline = gsap.timeline();
  // let sentenceWidth = sentence.current.clientWidth;
  // timeline.add(createMarquee(icons.current, "right"), 0);

  // function createMarquee(element, direction) {
  //   const distance = WORD.length * 2;
  //   return gsap.timeline().to(element, {
  //     ...configs,
  //     x: direction === "left" ? distance : -distance,
  //     onComplete() {
  //       timeline.play(0);
  //     },
  //     onReverseComplete() {
  //       timeline.reverse(0);
  //     },
  //   });
  // }

  // timeline.to("#marquee-second-line", {
  //   x: WORD.length * 2,
  //   onComplete() {
  //     timeline.play(0);
  //   },
  // });

  return (
    <>
      <section ref={icons} className="marques2">
        <div class="item item--hover-pause bg-[#6640ff] text-[#ede1ff]">
          <ul class="item__content">
            <li>utshuk</li>
            <li>respourse reg</li>
            <li>wollongong ocuncel</li>
            <li>singleton counse</li>
            <li>rhino</li>
          </ul>

          <ul aria-hidden="true" class="item__content">
            <li>utshuk</li>
            <li>respourse reg</li>
            <li>wollongong ocuncel</li>
            <li>singleton counse</li>
            <li>rhino</li>
          </ul>
        </div>

        {/* <div
          id="marquee-second-line"
          class="marquee__line bg-[#6640ff] text-[#ede1ff]"
        >
          <div class="marquee__sentence" ref={sentence}>
            Utshuk Raj Dhamala Apple Ball Cat
          </div>
          <div class="marquee__sentence">Utshuk Raj Dhamala Apple Ball Cat</div>
          <div class="marquee__sentence">Utshuk Raj Dhamala Apple Ball Cat</div>
        </div> */}

        {/* <div>
          <div className="marquee-framer bg-[#6640ff] text-[#ede1ff]">
         
            <motion.div
              className="track"
              variants={marqueeVariants}
              animate="animate"
            >
              <h1>
                Let's Work Together. Let's Work Together. Let's Work Together.
                Let's Work Together. Let's Work Together. Let's Work Together.
                Let's Work Together
              </h1>
            </motion.div>
          </div>
        </div> */}
      </section>
    </>
  );
};
