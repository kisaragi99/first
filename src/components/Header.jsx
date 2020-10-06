import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://jlptsensei.com/wp-content/uploads/2015/02/JLPT-logo-600x298.jpg"
        alt="logo1"
      />
    </header>
  );
};

export default Header;