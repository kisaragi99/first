import React from "react";
import s from "./Friends.module.css"
import FriendsItem from "./FriendsItem/FriendsItem";
import * as axios from "axios";
import avatar from "../../assets/images/avatar.png"

const Friends = (props) => {

    let getUsers = () => {
        if (props.friends.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setFriends(response.data.items)
            })
        }
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
        <div>
            <button onClick={getUsers}>Get Users</button>
            <div className={s.wrapper}>
                {friendss}
            </div>
        </div>

    )
}
export default Friends;


