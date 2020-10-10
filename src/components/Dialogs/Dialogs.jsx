import React from "react";
import s from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={s.main}>
            <div className={s.dialogs}>
                <div className={s.dialog}>Lex</div>
                <div className={s.dialog}>Lost</div>
                <div className={s.dialog}>Smile</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>Let`s Play Some Dota!</div>
                <div className={s.message}>This was smart!</div>
            </div>
        </div>)
}
export default Dialogs;