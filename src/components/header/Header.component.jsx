import { useState } from "react";

import "./Header.styles.css";
// import "./Header.script";

import HeaderLogo from "../../assets/img/omnifood-logo.png";

const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <header className={`header ${open ? "" : "nav-open"}`}>
      <a href="#logo">
        <img src={HeaderLogo} className="logo" alt="Omnifood Logo" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#how" className="main-nav-links">
              How it works
            </a>
          </li>
          <li>
            <a href="#meals" className="main-nav-links">
              Meals
            </a>
          </li>
          <li>
            <a href="#testimonials" className="main-nav-links">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#pricing" className="main-nav-links">
              Pricing
            </a>
          </li>
          <li>
            <a href="#cta" className="main-nav-links nav-cta">
              Try for free
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav" onClick={() => setOpen(!open)}>
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
};

export const headerElement = document.querySelector(".header");
export default Header;
