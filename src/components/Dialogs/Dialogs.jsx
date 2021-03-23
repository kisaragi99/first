import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import avatar from '../../assets/images/avatar.png';

const Dialogs = (props) => {
    console.log("dialogs rendered")
    const message2 = props.dialogsPage.lastMessages;

    // вот здесь вместо message2 надо чтобы был массив всех последних сообщений всех диалогов.
    
    let dialogsElement = props.dialogsPage.dialogs
        .map(((dialog, index) => <DialogItem name={dialog.userName} 
                                    id={dialog.id} 
                                    avatar={!dialog.photos.small ? avatar : dialog.photos.small } 
                                    key={dialog.id} 
                                    message={message2[index]}/>)
        );

    return (
        <div className={s.main}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
        </div>)
}

export default Dialogs;