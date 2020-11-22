import React from "react";
import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <div>
            <div className={s.dialogWrapper}>
                <div className={s.dialogAvatar}>
                    <img src={props.avatar} alt='avatar'/>
                </div>
                <div className={s.dialog}>
                    <NavLink className={s.link} to={path}>{props.name}</NavLink>
                </div>
            </div>
        </div>
    )
}
export default DialogItem;

