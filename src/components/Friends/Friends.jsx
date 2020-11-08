import React from "react";
import s from "./Friends.module.css"
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {

    let friendss = props.friends.map((friend => <FriendsItem name={friend.name} avatar={friend.avatar} key={friend.id}/>));

    return (
        <div className={s.wrapper}>
            {friendss}
        </div>)
}
export default Friends;