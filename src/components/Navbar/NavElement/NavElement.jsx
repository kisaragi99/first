import React from "react";
import s from "./NavElement.module.css";
import {NavLink} from "react-router-dom";

const NavElement = (props) => {
    return (

        <div className={s.item}>
            <NavLink to={props.addres} className={s.link} activeClassName = {s.active}>
                {props.title}
            </NavLink>
        </div>
    );
};

export default NavElement;

