import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs
        .map((dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
        );
    let messagesElement = props.state.messages
        .map((message => <MessageItem message={message.message}/>)
        );

    let messageTextArea = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }
    let onMessageChange = () => {
        let text = messageTextArea.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: text});
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
