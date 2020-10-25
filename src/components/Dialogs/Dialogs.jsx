import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, onPostChangeActionCreator} from "../../redux/state";




const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs
        .map((dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
        );
    let messagesElement = props.state.messages
        .map((message => <MessageItem message={message.message}/>)
        );

    let messageTextArea = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = messageTextArea.current.value;
        props.dispatch(onPostChangeActionCreator(text));
    }

    return (
        <div className={s.main}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div className={s.messageSendArea}>
                    <textarea ref={messageTextArea} onChange={onMessageChange}
                              value={props.newMessageTempText}></textarea>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>

        </div>)
}
export default Dialogs;
