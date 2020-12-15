import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    let dialogsElement = props.dialogsPage.dialogs
        .map((dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} key={dialog.id}/>)
        );
    let messagesElement = props.dialogsPage.messages
        .map((message => <MessageItem message={message.message} key={message.id}/>)
        );

    const AddMessageForm = (props) => {
        return (<>
                <form onSubmit={props.handleSubmit}>
                    <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter Your Message"}/>
                    <button>Send</button>
                </form>
            </>
        )
    }

    let addMessage = (value) => {
        props.addMessage(value.newMessageBody)
    }

    const AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

    return (
        <div className={s.main}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <AddMessageReduxForm onSubmit={addMessage}/>
            </div>
        </div>)
}

export default Dialogs;