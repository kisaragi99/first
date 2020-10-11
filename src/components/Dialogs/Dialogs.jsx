import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";



const Dialogs = (props) => {
    return (
        <div className={s.main}>
            <div className={s.dialogs}>
                <DialogItem name="Lex" id="1"/>
                <DialogItem name="Lost" id="2"/>
                <DialogItem name="Smile" id="3"/>
            </div>
            <div className={s.messages}>
                <MessageItem message="Hi!"/>
                <MessageItem message="Lets play some Dota!"/>
                <MessageItem message="Are you here?"/>
            </div>
        </div>)
}
export default Dialogs;

