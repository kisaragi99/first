import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./DialogPrivatePage.module.css"
import { withRouter } from "react-router-dom";
import {getSomeUserMessages, getSenderProfile, getRecipientProfile} from "../../../redux/dialogs-reducer"

const DialogPrivatePage = (props) => {

    const dispatch = useDispatch();
    const dialogsPage = useSelector(state => state.dialogsPage);
    const someUserMessages = dialogsPage.someUserMessages;

    const senderName = someUserMessages[0].senderName;
    const senderId = someUserMessages[0].senderId;
    const recipientId = someUserMessages[0].recipientId;
  
    const senderPhoto = dialogsPage.senderProfile.data.photos.small;
    const recipientPhoto = dialogsPage.recipientProfile.data.photos.small;


    useEffect(()=>{
        if(senderId !== undefined){
            dispatch(getSenderProfile(senderId))
        }
    },[dispatch, senderId]);

    useEffect(()=>{
        if(recipientId !== undefined){
            dispatch(getRecipientProfile(recipientId))
        }
    },[dispatch, recipientId]);

    useEffect(()=>{
        dispatch(getSomeUserMessages(props.match.params.dialogId))
    },[dispatch, props.match.params.dialogId]);

    console.log("private rendered");
    
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
                {someUserMessages.map((message, index)=>{ 
                    return (
                        <div className={s.friendMessageWrapper} key={index}>
                            <img className={s.friendAvatar} src={senderPhoto} alt=""></img>
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
            
        </div>);
};
export default withRouter(DialogPrivatePage);



// const dispatch = useDispatch();
//     const someUserMessages = useSelector(state => state.dialogsPage.someUserMessages);
//     // мы получили сообщения какого-то юзера, потом мы:...    
//     const senderName = someUserMessages[0].senderName;
//     const senderId = someUserMessages[0].senderId;
//     const recipientId = someUserMessages[0].recipientId;

//     // Вытащили константы, которые не меняются в зависимости от сообщения.

//     const senderPhoto = useSelector(state => state.dialogsPage.senderProfile.data.photos.small);
//     const recipientPhoto = useSelector(state => state.dialogsPage.recipientProfile.data.photos.small);

