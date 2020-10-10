import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.main}>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    <NavLink to ="/dialogs/1">Lex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to ="/dialogs/2">Lost</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to ="/dialogs/3">Smile</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>Let`s Play Some Dota!</div>
                <div className={s.message}>This was smart!</div>
            </div>
        </div>)
}
export default Dialogs;

/*
DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD*/
