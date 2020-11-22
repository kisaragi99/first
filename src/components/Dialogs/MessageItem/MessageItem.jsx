import React from "react";
import s from "./MessageItem.module.css"

const MessageItem = (props) => {
    return (<div className={s.messagesBox}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKDM99rvtftg7ZHF5_cfcYMIddC35KSuaJ8Q&usqp=CAU' alt='avatar'/>
            <div className={s.message}>
                {props.message}
            </div>
        </div>

    )
}

export default MessageItem;

