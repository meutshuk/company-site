import React from "react";
import { Car } from "./Car";
import RubberDuck from "./RubberDuck";

export default function Main() {
  return (
    // <section className=" container my-16 mx-auto h-screen grid grid-rows-3 grid-cols-none lg:grid-rows-none lg:grid-cols-12 justify-center items-center ">

    <section>
      <Section1 />
      <Section2 />
    </section>
  );
}

const Section1 = () => {
  return (
    <div class=" m-16  h-[70vh] justify-center items-center grid md:grid-cols-5 grid-rows-[1fr,2fr,1fr] md:grid-rows-none">
      <div class="md:col-span-3 h-full row-span-2 md:row-span-auto">
        <Car />
      </div>
      <div class="md:col-span-2 row-span-2 md:row-span-auto ">
        <div className=" ">
          <h1 className="text-color">
            Using the latest technologies to create innovative training and
            development solutions
          </h1>
          <p className="mt-5 text-color">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas
            architecto commodi ex excepturi aspernatur reprehenderit esse at
            quaerat velit molestias, sint eaque eveniet officia doloremque
            maxime impedit consectetur delectus.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div class=" m-16  h-[70vh] justify-center items-center grid md:grid-cols-5 grid-rows-[1fr,2fr,1fr] md:grid-rows-none">
      <div class="md:col-span-2  row-span-2 md:row-span-auto">
        <div className=" ">
          <h1 className="text-color">
            Using the latest technologies to create innovative training and
            development solutions
          </h1>
          <p className="mt-5 text-color">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas
            architecto commodi ex excepturi aspernatur reprehenderit esse at
            quaerat velit molestias, sint eaque eveniet officia doloremque
            maxime impedit consectetur delectus.
          </p>
        </div>
      </div>
      <div class="md:col-span-3 row-span-2 h-full md:row-span-auto ">
        <RubberDuck />
      </div>
    </div>
  );
};
