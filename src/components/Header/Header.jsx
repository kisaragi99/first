import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://jlptsensei.com/wp-content/uploads/2015/02/JLPT-logo-600x298.jpg"
                alt="logo1"
            />
            <div className={s.loginBlock}>

                {props.isAuth ? <NavLink to={'/login'}>{props.login}</NavLink> : "Need Auth"}
            </div>
        </header>
    );
};

export default Header;
