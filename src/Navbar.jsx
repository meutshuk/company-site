import "./Navbar.scss";
// import { Navbar as Nav } from "./Navbar/Navbar";

export const Navbar = () => {
  let body;
  let menu;
  let menuItems;

  body = document.querySelector("body");
  menuItems = document.querySelectorAll(".nav__list-item");

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass))
      element.classList.remove(stringClass);
    else element.classList.add(stringClass);
  };

  return (
    <>
      <div className="menu-icon__left">MRVR</div>
      <div
        onClick={() => {
          toggleClass(body, "nav-active");
        }}
        className="menu-icon"
      >
        <span className="menu-icon__line menu-icon__line-left"></span>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line menu-icon__line-right"></span>
      </div>

      <div className="nav">
        <div className="nav__content">
          <ul className="nav__list menu  ">
            <div>
              <a className="menu__item-link">Home</a>
              <div className="marquee">
                <div className="marquee__inner" aria-hidden="true">
                  <span>Home</span>
                  <span>Home</span>
                  <span>Home</span>
                  <span>Home</span>
                </div>
              </div>
            </div>

            <div className="menu__item nav__list-item">
              <a className="menu__item-link">Contact </a>
              <div className="marquee">
                <div className="marquee__inner" aria-hidden="true">
                  <span>Contact </span>
                  <span>Contact </span>
                  <span>Contact </span>
                  <span>Contact </span>
                </div>
              </div>
            </div>
            <div className="menu__item nav__list-item">
              <a className="menu__item-link">About Us</a>
              <div className="marquee">
                <div className="marquee__inner" aria-hidden="true">
                  <span>About Us</span>
                  <span>About Us</span>
                  <span>About Us</span>
                  <span>About Us</span>
                </div>
              </div>
            </div>
          </ul>
          {/* <Nav /> */}
        </div>
      </div>
    </>
  );
};
