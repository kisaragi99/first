import React from "react";
import s from "./NavElement.module.css";

const NavElement = (props) => {
    return (
        <div className={s.item}>
            <a href="https://www.google.com" target="blank">
                {props.title}
            </a>
        </div>
    );
};

export default NavElement;
