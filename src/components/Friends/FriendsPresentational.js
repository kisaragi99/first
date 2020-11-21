import React from "react";
import s from "./Friends.module.css";
import avatar from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let FriendsPresentational = (props) => {

    let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>

        {
            props.friends.map((friend =>
                    <div className={s.friendsBox} key={friend.id}>
                        <div>
                            <div>
                                <NavLink to={'/profile/' + friend.id}>
                                    <img src={friend.photos.small != null ? friend.photos.small : avatar}
                                         className={s.friendsAvatar}/>
                                </NavLink>
                            </div>
                            <div> {friend.followed ?

                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${friend.id}`,{
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "c3b6b8c4-0dfb-4a27-8050-5e4ce867a46f"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(friend.id)
                                        }
                                    })
                                }}> Unfollow </button> :


                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${friend.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "c3b6b8c4-0dfb-4a27-8050-5e4ce867a46f"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(friend.id)
                                        }
                                    })
                                }}>Follow</button>


                            }
                            </div>
                        </div>

                        <div>
                            <div>
                                <div>{friend.name}</div>
                                <div>{friend.status}</div>
                            </div>
                            <div>
                                <div>{"Some Country"}</div>
                                <div>{"Some City"}</div>
                            </div>
                        </div>
                    </div>
            ))}
        <div> {pages.map(p => {
            return <span className={props.currentPage === p && s.selectedPage}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}>{`${p} `}</span>
        })}
        </div>
    </div>
}
export default FriendsPresentational