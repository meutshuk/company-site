import React from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

export default function Toggle({ darkMode, toggleDayNight }) {
  return (
    <button
      className="focus:outline-none fixed top-6  right-24 z-10  bg-gray-500 hover:bg-gray-400 rounded-md p-1 night-toggle-btn"
      onClick={toggleDayNight}
    >
      {!darkMode ? (
        <BiSolidSun className="text-amber-200 text-3xl" />
      ) : (
        <BiSolidMoon className="text-3xl text-white" />
      )}
    </button>
  );
}
