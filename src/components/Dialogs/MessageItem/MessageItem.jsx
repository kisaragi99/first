import React from "react";
import s from "./MessageItem.module.css"

const MessageItem = (props) => {
    return (
        <div className={s.messagesBox}>
            <div className={s.senderName}>{props.senderName}: </div>
            <div className={s.message}>{props.message}</div>
        </div>

    )
}

export default MessageItem;

