import React from "react";
import s from "./Navbar.module.css";
import NavElement from "./NavElement/NavElement";


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.itemWrapper}>
        <div className={s.item}>
          <NavElement title = "Home page"/>
        </div>
        <div className={s.item}>
          <NavElement title = "News"/>
        </div>
        <div className={s.item}>
          <NavElement title = "Messages"/>
        </div>
        <div className={s.item}>
          <NavElement title = "Settings"/>
        </div>
        <div className={s.item}>
          <NavElement title = "Information"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
