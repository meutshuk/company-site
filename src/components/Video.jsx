import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Video({ isDay }) {
  const officeRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Load and reset the new video source
      videoRef.current.play(); // Play the video
    }
  }, [isDay]);

  return (
    <section className="video-section ">
      <video
        ref={videoRef}
        key={isDay ? "day" : "night"}
        playsInline
        autoPlay
        muted
        loop
      >
        <source
          src={
            isDay
              ? "./videos/background/day.mp4"
              : "./videos/background/night.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div
        className={
          isDay
            ? "logo-text-overlay logo color-black"
            : "logo-text-overlay logo color-white"
        }
        ref={officeRef}
      >
        MINES REACUE VR
      </div>
    </section>
  );
}
