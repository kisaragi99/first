import React from "react";
import s from "./Friends.module.css"
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {
debugger;
    let friendss = props.friends.map((friend => <FriendsItem name={friend.name} avatar={friend.avatar}/>));

    return (
        <div className={s.wrapper}>
            {friendss}
        </div>)
}
export default Friends;