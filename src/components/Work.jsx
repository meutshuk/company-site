import React from "react";

const videos = [
  {
    thumbnail: "videos/1/1.png",
    video: "./videos/1/1.mp4",
    description: "World animation",
  },
  {
    thumbnail: "./videos/1/1.png",
    video: "./videos/1/1.mp4",
    description: "World animaion",
  },
  {
    thumbnail: "./videos/1/1.png",
    video: "./videos/1/1.mp4",
    description: "World animaion",
  },
  {
    thumbnail: "./videos/1/1.png",
    video: "./videos/1/1.mp4",
    description: "World animaion",
  },
];

const VideoCard = ({ thumbnail, video, description }) => {
  let videoRef = React.useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    // if (videoRef.current) videoRef.current.pause();
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset the video to the beginning
      videoRef.current.load(); // Reloads the video element and refreshes the poster thumbnail
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div
        className="  w-80 h-96 "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-gray-900 h-full object-fill border-ascent border-2 overflow-hidden relative rounded-3xl">
          <video
            className="object-cover w-full h-full"
            ref={videoRef}
            width="auto"
            height="auto"
            preload="none"
            autoPlay
            playsInline
            loop
            muted
            poster={thumbnail}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <span className="text-color font-light text-lg">{description}</span>
    </div>
  );
};

export default function Work() {
  return (
    <div className="container  mx-auto py-10">
      <h1 className="text-center text-color  mb-8">What We Do</h1>
      <div className="flex  justify-center ">
        <div className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-8 lg:gap-12">
          {videos.map((videoData, index) => (
            <VideoCard key={index} {...videoData} />
          ))}
        </div>
      </div>
    </div>
  );
}
