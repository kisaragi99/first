import React from "react";
import s from "./Navbar.module.css";
import NavElement from "./NavElement/NavElement";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.itemWrapper}>
                    <NavElement title="Profile" addres = "/profile"/>
                    <NavElement title="News" addres = "/news"/>
                    <NavElement title="Messages" addres = "/dialogs"/>
                    <NavElement title="Settings" addres = "/settings"/>
                    <NavElement title="Information" addres = "/information"/>
            </div>
        </nav>
    );
};

export default Navbar;

/*<nav className={s.nav}>
    <div className={s.itemWrapper}>
        <div>
            <NavElement title="Profile" addres = "/profile"/>
        </div>
        <div>
            <NavElement title="News" addres = "/news"/>
        </div>
        <div>
            <NavElement title="Messages" addres = "/dialogs"/>
        </div>
        <div>
            <NavElement title="Settings" addres = "/settings"/>
        </div>
        <div>
            <NavElement title="Information" addres = "/information"/>
        </div>
    </div>
</nav>*/
