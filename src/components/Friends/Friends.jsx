import React from "react";
import s from "./Friends.module.css"
import Post from "../Profile/MyPosts/Post/Post";
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {

    let friendss = props.state.friends.map((friend => <FriendsItem name={friend.name} avatar={friend.avatar}/>));

    return (
        <div>
            {friendss}
        </div>)
}
export default Friends;