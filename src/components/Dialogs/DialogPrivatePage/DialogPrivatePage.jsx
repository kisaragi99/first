import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./DialogPrivatePage.module.css"
import { withRouter } from "react-router-dom";
import {getSomeUserMessages} from "../../../redux/dialogs-reducer"
import {dialogsAPI} from "../../../api/api"

const DialogPrivatePage = (props) => {
    const dispatch = useDispatch();
    const someUserId = props.match.params.dialogId;
    const someUserMessages = useSelector(state => state.dialogsPage.someUserMessages);
    

    const senderName = someUserMessages[0].senderName;
    const senderId = someUserMessages[0].senderId;
    const recipientId = someUserMessages[0].recipientId;


    useEffect(()=>{
        dispatch(getSomeUserMessages(props.match.params.dialogId))
    },[dispatch, props.match.params.dialogId])

    console.log("private rendered")
    return (

        <div className={s.wrapper}>
            <div className={s.header}>
                <button className={s.backButton}>Назад</button>
                <div className={s.friendInfo}>
                    <div className={s.firendNameHeader}>{recipientId}</div>
                    <div className={s.friendTime}>Something goes here</div>
                </div>
            </div>

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
                


            <div className={s.footerWrapper}>
                <div className={s.footer}>
                    <input className={s.sendMessage}></input>
                    <button className={s.sendMessageButton}>Отправить сообщение</button>
                </div>
            </div>
            
        </div>)
}
export default withRouter(DialogPrivatePage);