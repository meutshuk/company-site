import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import { Navbar } from "./Navbar/Navbar";
import { Marquee } from "./components/Marquee";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Video from "./components/Video";
import Work from "./components/Work";
import Toggle from "./components/Toggle";

function App() {
  const [isDay, setIsDay] = useState(true); // default to day mode

  // const [isDarkMode, setIsDarkMode] = useState(
  //   () =>
  //     localStorage.getItem("dark-mode") === "true" ||
  //     (!localStorage.getItem("dark-mode") &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  // );

  // useEffect(() => {
  //   localStorage.setItem("dark-mode", isDarkMode);
  //   document.body.classList.toggle("dark-mode", isDarkMode);
  // }, [isDarkMode]);

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
      <Nav darkMode={darkMode} toggleDayNight={toggleDayNight} />

      {/* Toggle Button */}
      <Toggle darkMode={darkMode} toggleDayNight={toggleDayNight} />

      {/* Main */}
      <Main />

      {/* Marquess with texts */}
      <Marquee />

      {/* Animations */}
      <Work />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
