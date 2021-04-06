import React from "react";
import s from "./NavElement.module.css";
import {NavLink} from "react-router-dom";
import { useDispatch } from "react-redux";
import {refreshDppState} from "../../../redux/dialogs-reducer"

const NavElement = (props) => {

    const dispatch = useDispatch();

    return (

        <div className={s.item}>
            <NavLink to={props.addres} onClick={()=>{dispatch(refreshDppState())}} className={s.link} activeClassName = {s.active}>
                {props.title}
            </NavLink>
        </div>
    );
};

export default NavElement;

