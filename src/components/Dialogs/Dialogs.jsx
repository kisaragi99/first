import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators";
import avatar from '../../assets/images/avatar.png'

const maxLength100 =  maxLengthCreator(100);

const Dialogs = (props) => {
    console.log("dialogs rendered")

    let dialogsElement = props.dialogsPage.dialogs
        .map((dialog => <DialogItem name={dialog.userName} id={dialog.id} avatar={!dialog.photos.small ? avatar : dialog.photos.small } key={dialog.id}/>)
        );
    let messagesElement = props.dialogsPage.messages
        .map((message => <MessageItem message={message.body} key={message.id} senderName={message.senderName}/>)
        );

    const AddMessageForm = (props) => {
        return (<>
                <form onSubmit={props.handleSubmit}>
                    <Field component={Textarea} name={"newMessageBody"} placeholder={"Enter Your Message"} validate={[required,maxLength100]}/>
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