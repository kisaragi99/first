import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className ={s.item}>
        <a href="https://www.google.com" target="blank">
          Home Page
        </a>
      </div>
      <div className ={s.item}>
        <a href="https://www.google.com" target="blank">
          Settings
        </a>
      </div>
      <div className ={s.item}>
        <a href="https://www.google.com" target="blank">
          N4
        </a>
      </div>
      <div className ={s.item}>
        <a href="https://www.google.com" target="blank">
          N3
        </a>
      </div>
      <div className ={s.item}>
        <a href="https://www.google.com" target="blank">
          N2
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
