import React from "react";
import s from "./FriendsItem.module.css"

const FriendsItem = (props) => {

    return (
        <div className={s.friendsBox}>
            <img className={s.friendsAvatar} src = {props.avatar}/>
            <div className={s.friendsName}>
                {props.name}
            </div>
        </div>
    )
}
export default FriendsItem;