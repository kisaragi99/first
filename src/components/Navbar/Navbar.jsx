import React from "react";
import s from "./Navbar.module.css";
import NavElement from "./NavElement/NavElement";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.itemWrapper}>
                <div className={s.item}>
                    <NavElement title="Profile" adres = "/profile"/>
                </div>
                <div className={s.item}>
                    <NavElement title="News" adres = "/news"/>
                </div>
                <div className={s.item}>
                    <NavElement title="Messages" adres = "/dialogs"/>
                </div>
                <div className={s.item}>
                    <NavElement title="Settings" adres = "/settings"/>
                </div>
                <div className={s.item}>
                    <NavElement title="Information" adres = "/information"/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
