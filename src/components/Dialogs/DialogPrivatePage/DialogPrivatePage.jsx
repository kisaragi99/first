import React from "react";
import s from "./DialogPrivatePage.module.css"

const DialogPrivatePage = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <button className={s.backButton}>Назад</button>
                <div className={s.friendInfo}>
                    <div className={s.firendNameHeader}>Nikolay Johns</div>
                    <div className={s.friendTime}>Был в сети: 23 минут назад</div>
                </div>
            </div>


            <div className={s.mainBody}>
                <div className={s.friendMessageWrapper}>
                    <img className={s.friendAvatar} alt=""></img>
                    <div className={s.friendInnerWrapper}>
                        <div className={s.friendMessageName}>Nikolay Johns</div>
                        <div className={s.friendMessageBody}>Привет</div>
                    </div>
                </div>
                <div className={s.selfMessageWrapper}>
                    <img className={s.selfAvatar} alt=""></img>
                    <div className={s.selfInnerWrapper}>
                        <div className={s.selfMessageName}>Seeman223</div>
                        <div className={s.selfMessageBody}>Здравствуй</div>
                    </div>
                </div>
            </div>


            <div className={s.footerWrapper}>
                <div className={s.footer}>
                    <input className={s.sendMessage}></input>
                    <button className={s.sendMessageButton}>Отправить сообщение</button>
                </div>
            </div>
            
        </div>)
}
export default DialogPrivatePage;