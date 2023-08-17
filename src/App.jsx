import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import { Navbar } from "./Navbar/Navbar";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { ICONS } from "./Icons";
import { FaLinkedin, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { Marquee } from "./marquee/Marquee";
import NEWApp from "./New/App";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <section className="h-screen overflow-hidden  opacity-60">
        <video id="background-video" muted loop autoPlay>
          <source src="./qld_promo_11-8-23 (2).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className=" container my-16 mx-auto ">
        <div className=" flex text-center items-center flex-col  ">
          <div className="  mx-[15%] ">
            <p className="text-3xl font-extralight">
              Using the latest technologies to create innovative training and
              development solutions
            </p>

            <p className="mt-6">
              Mines Rescue Virtual Reality Technologies has been providing
              world-class VR training solutions to the Australian mining
              industry since 2007. The Virtual Reality Technologies team create
              innovative training solutions for mining and hazardous industries.
              Our proprietary Virtual Reality software has been developed to
              create immersive training experiences utilising the latest Virtual
              Reality hardware. Our software complements traditional classroom
              training techniques and works to maximise the benefit of valuable
              face-to-face training services. Users can create effective,
              relevant, and realistic training scenarios to deliver
              market-leading immersive training experiences.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="bg-black h-screen "></section> */}

      {/* <section className="canvas h-full w-full">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={1} />
          <mesh>
            <boxGeometry />
            <meshNormalMaterial />
          </mesh>
        </Canvas>
      </section> */}

      {/* We work  */}
      <section></section>

      {/* MOVING who we wo with */}

      <Marquee />

      {/* Footer */}
      <footer className="bg-green-200">
        <div className="container mx-auto p-10">
          <div className="flex flex-row justify-between">
            <div className="flex gap-2">
              <span>0411215554</span>
              <span>@coalservices</span>
              <span>Mines Rescue ABN: 15 099 078 261</span>
            </div>
            <div className="flex gap-2">
              <FaLinkedin />
              <FaFacebookSquare />
              <FaTwitter />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
