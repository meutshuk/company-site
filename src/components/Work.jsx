import React from "react";

const videos = [
  {
    thumbnail: "videos/1/1.png",
    video: "./videos/1/1.mp4",
    desctiprion: "World animation",
  },
  {
    thumbnail: "./videos/1/1.png",
    video: "./videos/1/1.mp4",
    desctiprion: "World animaion",
  },
];

// const VideoCard = ({ thumbnail, video }) => {
//   console.log(thumbnail, video);
//   let videoRef = React.useRef(null);

//   const handleMouseEnter = () => {
//     if (videoRef.current) videoRef.current.play();
//   };

//   const handleMouseLeave = () => {
//     if (videoRef.current) videoRef.current.pause();
//   };

//   return (
//     <div
//       className="w-1/2 p-4"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="bg-gray-900 h-64 overflow-hidden relative">
//         <video
//           ref={videoRef}
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           preload="none"
//           loop
//           muted
//           poster={thumbnail}
//         >
//           <source src={video} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

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
    <div
      className="w-80 h-96 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-gray-900 h-full object-fill  overflow-hidden relative rounded-3xl">
        <video
          className="object-cover w-full h-full"
          ref={videoRef}
          width="auto"
          height="auto"
          preload="none"
          loop
          muted
          poster={thumbnail}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default function Work() {
  return (
    <div className="container  mx-auto py-10">
      <h2 className="text-center text-2xl mb-8">What We Do</h2>
      <div className="flex  justify-center ">
        <div className="flex flex-wrap flex-col md:flex-row items-center gap-12">
          {videos.map((videoData, index) => (
            <VideoCard key={index} {...videoData} />
          ))}
        </div>
      </div>
    </div>
  );
}
