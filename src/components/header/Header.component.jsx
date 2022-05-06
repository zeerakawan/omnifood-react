import { useState } from "react";

import Logo from "../logo/Logo.component";
import IonIcon from "../ionicon/IonIcon.component";
import List from "../list/List.component";

import "./Header.styles.css";
// import "./Header.script";

import HeaderLogo from "../../assets/img/omnifood-logo.png";

const navList = [
  {
    listName: "How it works",
    className: "main-nav-links",
    href: "#how",
  },
  {
    listName: "Meals",
    className: "main-nav-links",
    href: "#meals",
  },
  {
    listName: "Testimonials",
    className: "main-nav-links",
    href: "#testimonials",
  },
  {
    listName: "Pricing",
    className: "main-nav-links",
    href: "#pricing",
  },
  {
    listName: "Try for free",
    className: "main-nav-links nav-cta",
    href: "#cta",
  },
];

const renderNavList = navList.map((list) => {
  return (
    <List
      key={list.href}
      href={list.href}
      className={list.className}
      text={list.listName}
    ></List>
  );
});

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={`header ${open ? "nav-open" : ""}`}>
      <Logo
        href="#logo"
        className="logo"
        alt="omnifood-logo"
        src={HeaderLogo}
      />
      <nav className="main-nav">
        <ul className="main-nav-list">{renderNavList}</ul>
      </nav>

      <button className="btn-mobile-nav" onClick={() => setOpen(!open)}>
        <IonIcon
          className="icon-mobile-nav"
          name={open ? "close-outline" : "menu-outline"}
        ></IonIcon>
      </button>
    </header>
  );
};

export const headerElement = document.querySelector(".header");
export default Header;
