import React from "react";
import s from "./Friends.module.css"
import FriendsItem from "./FriendsItem/FriendsItem";
import * as axios from "axios";
import avatar from "../../assets/images/avatar.png"

const Friends = (props) => {


    if (props.friends.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setFriends(response.data.items)
        })


    }


    let friendss = props.friends.map((friend => <FriendsItem name={friend.name}
                                                             avatar={friend.photos.small != null ? friend.photos.small : avatar}
                                                             id={friend.id}
                                                             status={friend.status}
                                                             location={friend.location}
                                                             followed={friend.followed}
                                                             follow={props.follow}
                                                             unfollow={props.unfollow}/>));

    return (
        <div className={s.wrapper}>
            {friendss}
        </div>)
}
export default Friends;


