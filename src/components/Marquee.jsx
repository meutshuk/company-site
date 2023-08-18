import { useRef } from "react";

const WORD = "Utshuk Raj Dhamala Apple Ball Cat";

const ITEMS = [
  "utshuk",
  "respourse reg",
  "wollongong ocuncel",
  "singleton counse",
  "rhino",
];

const MarqueeItem = () => {
  ITEMS.map((item) => {
    return (
      <li key={item} className="item__text">
        {item}
      </li>
    );
  });
};

export const Marquee = () => {
  const icons = useRef();

  return (
    <>
      <section ref={icons} className="marques2">
        <div className="item item--hover-pause bg-[#6640ff] text-[#ede1ff]">
          <ul className="item__content">
            {ITEMS.map((item) => {
              return (
                <li key={item} className="item__text">
                  {item}
                </li>
              );
            })}
          </ul>

          <ul aria-hidden="true" class="item__content">
            {ITEMS.map((item) => {
              return (
                <li key={item} className="item__text">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
