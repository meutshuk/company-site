import React from "react";
import { Car } from "./Car";

export default function Main() {
  return (
    <section className=" container my-16 mx-auto h-screen grid grid-rows-3 grid-cols-none lg:grid-rows-none lg:grid-cols-12 justify-center items-center ">
      <div className="row-span-2 lg:col-span-7 h-full">
        <Car />
      </div>
      <div className=" row-span-1 lg:col-span-5">
        <div className="  mx-[15%] ">
          <h1 className="text-color">
            Using the latest technologies to create innovative training and
            development solutions
          </h1>
          <p className="mt-5 text-color">
            Mines Rescue Virtual Reality Technologies has been providing
            world-class VR training solutions to the Australian mining industry
            since 2007. The Virtual Reality Technologies team create innovative
            training solutions for mining and hazardous industries. Our
            proprietary Virtual Reality software has been developed to create
            immersive training experiences utilising the latest Virtual Reality
            hardware. Our software complements traditional classroom training
            techniques and works to maximise the benefit of valuable
            face-to-face training services. Users can create effective,
            relevant, and realistic training scenarios to deliver market-leading
            immersive training experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
