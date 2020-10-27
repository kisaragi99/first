import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/state";


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs
        .map((dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
        );
    let messagesElement = props.state.messages
        .map((message => <MessageItem message={message.message}/>)
        );


    let addMessage = () => {
        props.dispatch(addMessageCreator());
    }
    let onMessageChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewMessageTextCreator(text));
    }

    return (
        <div className={s.main}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div className={s.messageSendArea}>
                    <textarea onChange={onMessageChange} value = {props.state.newMessageTempText}/>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>

        </div>)
}
export default Dialogs;
