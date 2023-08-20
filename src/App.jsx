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
      <Video darkMode={darkMode} />

      {/* Navbar with overlay when clicked open */}
      {/* <Navbar darkMode={darkMode} toggleDayNight={toggleDayNight} /> */}
      {/* 
      https://blog.olivierlarose.com/demos/text-clip-mask-on-scroll
      */}

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
          <div className="mx-10 text-4xl font-extrabold text-color">
            VR headset.
          </div>
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
