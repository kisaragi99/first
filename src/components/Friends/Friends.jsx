import React from "react";
import s from "./Friends.module.css"
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {
    if(props.friends.length === 0){
    props.setFriends([
        {
            id: 1,
            followed: true,
            fullName: "Lex",
            status: "I`m not Miracle",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKDM99rvtftg7ZHF5_cfcYMIddC35KSuaJ8Q&usqp=CAU",
            location: {
                city: "Moscow",
                country: "Russia"
            }
        },
        {
            id: 2,
            followed: false,
            fullName: "Lost",
            status: "TI Winner",
            avatar: "https://svirtus.cdnvideo.ru/5BwwcdCMwq3EQKgjMP-3rOqooBg=/0x0:209x204/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/35/354cfce6f19b2bc856220f4c5f13b3c2.jpg?m=d668102fd143f399db9880ce43f8a1ae",
            location: {
                city: "Moscow",
                country: "Russia"
            }
        },
        {
            id: 3,
            followed: true,
            fullName: "Smile",
            status: "ARS-ART",
            avatar: "https://svirtus.cdnvideo.ru/T2Rx94j-A62VChGWYun076lAK98=/0x0:250x250/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/73/735bd29e228660f8d7084f56351019be.jpg?m=693b8e5540cbd57774380aef7b191044",
            location: {
                city: "Moscow",
                country: "Russia"
            }
        },

    ])}

    let friendss = props.friends.map((friend => <FriendsItem name={friend.fullName}
                                                             avatar={friend.avatar}
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


