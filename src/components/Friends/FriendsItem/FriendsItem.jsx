import React from "react";
import s from "./FriendsItem.module.css"

const FriendsItem = (props) => {

    return (
        <div className={s.friendsBox} key={props.id}>
            <div>
                <div>
                    <img src = {props.avatar} className={s.friendsAvatar}/>
                </div>
                <div>
                    {props.followed
                        ? <button onClick={()=>{props.unfollow(props.id)}}>Unfollow</button> :
                          <button onClick={()=>{props.follow(props.id)}}>Follow</button> }
                </div>
            </div>

            <div>
                <div>
                    <div>{props.name}</div>
                    <div>{props.status}</div>
                </div>
                <div>
                    <div>{props.location.country}</div>
                    <div>{props.location.city}</div>
                </div>
            </div>
        </div>
    )
}
export default FriendsItem;



// <img className={s.friendsAvatar} src = {props.avatar}/>
// <div className={s.friendsName}>
//     {props.name}
//     {props.status}
//     {props.location.city}
//     {props.location.country}
// </div>