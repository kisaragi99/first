import React from "react";
import s from "./Friends.module.css";
import avatar from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";



let Friend = ({friend, followingInProcess, follow, unfollow}) => {

    return <>
                    <div className={s.friendsBox} key={friend.id}>
                        <div>
                            <div>
                                <NavLink to={'/profile/' + friend.id}>
                                    <img src={friend.photos.small != null ? friend.photos.small : avatar}
                                         className={s.friendsAvatar} alt='avatar'/>
                                </NavLink>
                            </div>
                            <div> {friend.followed ?
                                <button disabled={followingInProcess.some(id => id === friend.id )} onClick={() => {unfollow(friend.id)}}> Unfollow </button> :
                                <button disabled={followingInProcess.some(id => id === friend.id )} onClick={() => {follow(friend.id)}}>Follow</button>
                            }
                            </div>
                        </div>

                        <div>
                            <div>
                                <div>{friend.name}</div>
                                <div>{!friend.status ? "No-status" : friend.status}</div>
                            </div>
                        </div>
                    </div>
    </>
}
export default Friend


// Эта ошибка относится к коду на 47 строке """ className={props.currentPage === p && s.selectedPage} """
//index.js:1 Warning: Received `false` for a non-boolean attribute `className`.
//
// If you want to write it to the DOM, pass a string instead: className="false" or className={value.toString()}.