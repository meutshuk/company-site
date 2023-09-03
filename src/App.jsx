import { useEffect, useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Video from "./components/Video";
import Work from "./components/Work";
import Toggle from "./components/Toggle";
import Marquee from "react-fast-marquee";
import Header from "./components/Navbar/Header";
import MouseHover from "./components/MouseHover/MouseHover";

function App() {
  const [isDay, setIsDay] = useState(true); // default to day mode

  // // Toggle between day and night
  const toggleDayNight = () => {
    setDarkMode((prev) => !prev);
  };

  const [darkMode, setDarkMode] = useState(false);
  const storedMode = localStorage.getItem("dark-mode");

  useEffect(() => {
    if (storedMode) {
      setDarkMode(storedMode === "true");
    } else {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDarkScheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <>
      {/* Video backgroud */}
      {/* <Video darkMode={darkMode} /> */}
      {/* Navbar with overlay when clicked open */}
      {/* <Navbar darkMode={darkMode} toggleDayNight={toggleDayNight} /> */}
      {/* 
      https://blog.olivierlarose.com/demos/text-clip-mask-on-scroll
      */}
      <section className=" flex justify-center bg-background text-color">
        <div className="container py-20 border-b-2 border-red">
          <div>
            <div className="text-3xl font-medium lowercase">You</div>
            <div className="flex items-center gap-6">
              <div>Logo</div>
              <div className="text-6xl font-bold uppercase">Imagine</div>
            </div>
          </div>
          <div className="flex flex-col w-full items-end">
            <div className="lowercase text-3xl font-medium">We</div>
            <div className="font-bold text-6xl uppercase">Create</div>
          </div>
        </div>
      </section>
      {/* video area */}
      <section className="flex mt-10 justify-center bg-background text-color">
        <div className="container pb-20 border-b-2 border-red">
          <div className="flex justify-between items-center capitalize text-sm pb-10">
            <div className="">From imagination to animation</div>
            <div>Tell us what you want and we will make it happen</div>
          </div>

          <div className="bg-red text-center h-[50vh]  rounded-3xl overflow-hidden">
            Video
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-background text-color mt-20 ">
        <div className="container">
          <div className="text-base">VR</div>
          <div className="py-7 px-5 w-full md:w-[55%]  text-3xl polka">
            Step into a world where your story unfolds not on screens, but all
            around you. Leveraging the cutting-edge capabilities of VR paired
            with compelling animation, our team is dedicated to transporting
            audiences into narratives that resonate, inspire, and leave an
            indelible mark.
          </div>
        </div>
      </section>

      {/* <section className="mt-20 p-5 flex justify-center bg-color text-background rounded-3xl">
        <div className="container">

        </div>
      </section> */}

      <section className="flex justify-center my-20 bg-color text-background rounded-[3rem] py-20 ">
        <div className="container">
          <div className="font-medium text-lg my-5">ANIMATION</div>
          <MouseHover />
        </div>
      </section>

      {/* New Navbar bubble effect */}
      <Header />
      {/* Toggle Button */}
      <Toggle darkMode={darkMode} toggleDayNight={toggleDayNight} />
      {/* Main */}
      <Main />
      {/* Marquess with texts */}
      <section className=" ">
        <Marquee
          className="my-20 w-screen py-10 bg-ascent "
          gradient={true}
          gradientWidth={500}
          gradientColor={[25, 205, 0]}
          autoFill
        >
          <div className="mx-10 text-4xl font-extrabold text-header ">
            Utshuk.
          </div>
          <div className="mx-10 text-4xl font-extrabold text-color ">
            Gong council.
          </div>
          <img src={viteLogo} />
          <div className="mx-10 text-4xl font-extrabold text-header ">
            rhino.
          </div>
          <div className="mx-10 text-4xl font-extrabold text-color">ciggy.</div>
          <img src={reactLogo} />
          <div className="mx-10 text-4xl font-extrabold text-header">
            apple.
          </div>
          <div className="mx-10 text-4xl font-extrabold text-color">
            singleton.
          </div>
        </Marquee>
      </section>
      {/* Animations */}
      <Work />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
