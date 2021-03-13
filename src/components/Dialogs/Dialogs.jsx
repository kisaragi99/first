import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import avatar from '../../assets/images/avatar.png';

const Dialogs = (props) => {
    console.log("dialogs rendered")

    // Массив всех диалогов (ну, например, 10) allDialogs = [props.dialogsPage.dialogs] this is an array
    // Особенность заключается в том, что я, одним запросом могу вытащить только 1 диалог, то есть мне надо отправить чейн запросов?
    // И вопрос - откуда их отправить? В том месте уже должен быть массив всех диалогов... (allDialogs = [props.dialogsPage.dialogs])
    // то есть их можно получить в любом месте, а сюда уже должны прийти просто два массива(1- всех диалогов, 2- последние сообщения каждого диалога)

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