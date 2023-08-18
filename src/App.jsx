import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import { Navbar } from "./Navbar/Navbar";
import { Marquee } from "./components/Marquee";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Video from "./components/Video";
import Work from "./components/Work";

function App() {
  const [isDay, setIsDay] = useState(true); // default to day mode

  // Toggle between day and night
  const toggleDayNight = () => {
    setIsDay(!isDay);
  };

  return (
    <>
      {/* Video backgroud */}
      <Video isDay={isDay} />

      {/* Navbar with overlay when clicked open */}
      <Nav isDay={isDay} toggleDayNight={toggleDayNight} />

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
