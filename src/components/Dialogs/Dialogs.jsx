import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {
    let dialogs = [{id: 1, name: "Lex"}, {id: 2, name: "Lost"}, {id: 3, name: "Smile"}];
    let messages = [{id: 1, message: "Hi!"}, {id: 2, message: "Lets play some Dota!"}, {id: 3, message: "Are you here?"}];


    let dialogsElement = dialogs
        .map((dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
        )
    let messagesElement = messages
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

