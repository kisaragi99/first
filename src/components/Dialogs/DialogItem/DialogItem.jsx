import React from "react";
import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/privatepage/${props.id}`;
    let loadingMessage = <div className={s.loadingMessage}></div>; 

    return (
        <div>
            <div className={s.dialogWrapper}>
                <div className={s.dialogAvatar}>
                    <img src={props.avatar} alt='avatar'/>
                </div>
                <div className={s.dialog}>
                    <NavLink className={s.link} to={path}>{props.name}</NavLink>
                </div>
                <div className={s.message}>
                    {!props.message ? loadingMessage : props.message.length > 81 ? props.message.slice(0,78) + '...' : props.message }
                </div>
            </div>
        </div>
    )
}
export default DialogItem;

