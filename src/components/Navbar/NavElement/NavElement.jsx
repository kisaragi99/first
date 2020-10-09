import React from "react";
import s from "./NavElement.module.css";

const NavElement = (props) => {
    return (

        <div className={s.item}>
            <a href={props.adres} className={s.link}>
                {props.title}
            </a>
        </div>
    );
};

export default NavElement;

