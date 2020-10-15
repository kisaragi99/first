import React from "react";
import s from "./MessageItem.module.css"

const MessageItem = (props) => {
    return (<div className={s.messagesBox}>
            <img src = 'https://dic.nicovideo.jp/oekaki/733289.png'/>
            <div className={s.message}>
                {props.message}
            </div>
        </div>

    )
}

export default MessageItem;

