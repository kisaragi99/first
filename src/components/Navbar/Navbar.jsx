import React from "react";
import s from "./Navbar.module.css";
import NavElement from "./NavElement/NavElement";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.itemWrapper}>
                    <NavElement title="Profile" addres = "/profile"/>
                    <NavElement title="Friends" addres = "/friends"/>
                    <NavElement title="News" addres = "/news"/>
                    <NavElement title="Messages" addres = "/dialogs"/>
                    <NavElement title="Settings" addres = "/settings"/>
                    <NavElement title="testPage" addres = "/dialogsprivate"/>
            </div>
        </nav>
    );
};

export default Navbar;
