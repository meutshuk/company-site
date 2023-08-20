import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

Video.propTypes = {
  darkMode: PropTypes.bool,
};

export default function Video({ darkMode }) {
  const officeRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Load and reset the new video source
      videoRef.current.play(); // Play the video
    }
  }, [darkMode]);

  return (
    <section className="video-section ">
      {/* Day Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          visibility: !darkMode ? "visible" : "hidden",
        }}
      >
        <source src="./videos/background/day.mp4" type="video/mp4" />
      </video>

      {/* Night Video */}
      <video
        autoPlay
        loop
        playsInline
        muted
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          visibility: darkMode ? "visible" : "hidden",
        }}
      >
        <source src="./videos/background/night.mp4" type="video/mp4" />
      </video>

      <div
        className={
          "logo-text-overlay text-3xl md:text-4xl lg:text-6xl xl:text-7xl logo bg-color"
        }
        ref={officeRef}
      >
        MINES REACUE VR
      </div>
    </section>
  );
}
