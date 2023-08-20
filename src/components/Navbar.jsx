import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMenu, IoClose } from "react-icons/io5";

export default function NavBar({ darkMode, toggleDayNight }) {
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
            <div className="bg-red hover:opacity-90 text-white rounded-full ">
              <IoClose />
            </div>
          ) : (
            <div>
              <IoMenu className="bg-red hover:opacity-90 text-white rounded-full p-2" />
            </div>
          )}
        </button>

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
