import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Nav({ isDay, toggleDayNight }) {
  const navbarOverlayRef = useRef(null);
  const navLinkRefs = useRef([]);
  const [isOpen, setIsOpen] = useState(false);

  navLinkRefs.current = [];

  const addToRefs = (el) => {
    if (el && !navLinkRefs.current.includes(el)) {
      navLinkRefs.current.push(el);
    }
  };

  // Open Animation
  const openNavbar = () => {
    gsap.to(navbarOverlayRef.current, {
      duration: 0.5,
      left: 0,
      opacity: 1,
    });
    gsap.fromTo(
      navLinkRefs.current,
      { opacity: 0 },
      {
        duration: 0.5,
        opacity: 1,
        stagger: 0.2,
        delay: 0.5,
      }
    );
  };

  // Close Animation
  const closeNavbar = () => {
    gsap.to(navLinkRefs.current, {
      duration: 0.5,
      opacity: 0,
      stagger: 0.1,
    });
    gsap.to(navbarOverlayRef.current, {
      duration: 0.7,
      left: "-100%",
      opacity: 0,
      delay: 0.3,
    });
  };

  useEffect(() => {
    gsap.set(navLinkRefs.current, {
      transform: "translateY(100%)",
      opacity: 0,
    });
  }, []);

  const toggleNavbar = () => {
    if (!isOpen) {
      openNavbar();
    } else {
      closeNavbar();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        {/* <a className="logo-name text-blue-400">Mines Rescue VR</a> */}
        <button className="navbar-toggle " onClick={toggleNavbar}>
          {isOpen ? (
            <div className="bg-blue-400 rounded-full ">
              <IoClose />
            </div>
          ) : (
            <div>
              <IoMenu className="bg-blue-400 rounded-full p-2" />
            </div>
          )}
        </button>

        <Toggle isDay={isDay} toggleDayNight={toggleDayNight} />

        <div
          ref={navbarOverlayRef}
          className={`overlay ${isOpen ? "active" : ""}`}
        >
          <a href="#" ref={addToRefs} className="nav-link">
            HOME
          </a>
          <a href="#" ref={addToRefs} className="nav-link">
            ABOUT
          </a>
          <a href="#" ref={addToRefs} className="nav-link">
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
}

const Toggle = ({ isDay, toggleDayNight }) => {
  return (
    <label
      htmlFor="AcceptConditions"
      className="absolute right-24 top-7 z-20 h-8 w-12 cursor-pointer"
    >
      <input
        onClick={toggleDayNight}
        type="checkbox"
        id="AcceptConditions"
        className="peer sr-only"
        checked={!isDay}
      />

      <span className="absolute inset-0 m-auto h-2 rounded-full bg-red-500"></span>

      <span className="absolute inset-y-0 start-0 m-auto h-6 w-6 rounded-full bg-gray-500 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0">
        <span className="absolute inset-0 m-auto h-4 w-4 rounded-full bg-yellow-500 transition"></span>
      </span>
    </label>
  );
};
