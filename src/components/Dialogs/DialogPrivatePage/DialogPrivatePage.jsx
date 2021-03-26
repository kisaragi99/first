import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./DialogPrivatePage.module.css"
import { withRouter } from "react-router-dom";
import {getSomeUserMessages} from "../../../redux/dialogs-reducer"

const DialogPrivatePage = (props) => {
    const dispatch = useDispatch();
    const someUserMessages = useSelector(state => state.dialogsPage.someUserMessages);
    // мы получили сообщения какого-то юзера, потом мы:...    
    const senderName = someUserMessages[0].senderName;
    const senderId = someUserMessages[0].senderId;
    const recipientId = someUserMessages[0].recipientId;
    // Вытащили константы, которые не меняются в зависимости от сообщения.
    const senderPhoto = null; // получив id отправителя, надо получить его аватарку
    const recipientPhoto = null; // то же самое



    // сделать useEffect, в котором if senderId != undefined, then => делай запрос пользователя по этому айди
    // сделать useEffect, в котором if recipientId != undefined, then => делай запрос пользователя по этому айди
    // и нам надо достать оттуда его фотки и нормальное имя.
    // Сделать два отдельных свойства в стэйте dialogsPage.
    
    

    useEffect(()=>{
        dispatch(getSomeUserMessages(props.match.params.dialogId))
    },[dispatch, props.match.params.dialogId])

    console.log("private rendered")
    return (
        // header with button and aite no jouhou
        <div className={s.wrapper}>
            <div className={s.header}>
                <button className={s.backButton}>Назад</button> 
                <div className={s.friendInfo}>
                    <div className={s.firendNameHeader}>{recipientId}</div>
                    <div className={s.friendTime}>Something goes here</div>
                </div>
            </div>
{/* messages */}
            <div className={s.mainBody}>
                {someUserMessages.map((message)=>{ 
                    return (
                        <div className={s.friendMessageWrapper}>
                            <img className={s.friendAvatar} alt=""></img>
                            <div className={s.friendInnerWrapper}>
                                <div className={s.friendMessageName}>{message.senderName}</div>
                                <div className={s.friendMessageBody}>{message.body}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
{/* footer */}
            <div className={s.footerWrapper}>
                <div className={s.footer}>
                    <input className={s.sendMessage}></input>
                    <button className={s.sendMessageButton}>Отправить сообщение</button>
                </div>
            </div>
            
        </div>)
}
export default withRouter(DialogPrivatePage);