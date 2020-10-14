import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {


    let dialogsElement = props.state.dialogs
        .map((dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
        )
    let messagesElement = props.state.messages
        .map((message => <MessageItem message={message.message}/>)
        )
    return (
        <div className={s.main}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>)
}
export default Dialogs;
