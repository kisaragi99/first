import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs
        .map((dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} key={dialog.id}/>)
        );
    let messagesElement = props.dialogsPage.messages
        .map((message => <MessageItem message={message.message} key={message.id}/>)
        );

    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.main}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div className={s.messageSendArea}>
                    <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageTempText}/>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>

        </div>)
}
export default Dialogs;
