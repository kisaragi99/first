import React from "react";
import s from "./Friends.module.css";
import avatar from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";


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
                                         className={s.friendsAvatar} alt='avatar'/>
                                </NavLink>
                            </div>
                            <div> {friend.followed ?
                                <button disabled={props.followingInProcess.some(id => id === friend.id )} onClick={() => {props.unfollow(friend.id)}}> Unfollow </button> :
                                <button disabled={props.followingInProcess.some(id => id === friend.id )} onClick={() => {props.follow(friend.id)}}>Follow</button>
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
        <div> {pages.map((p, index) => {
            return <span className={props.currentPage === p && s.selectedPage}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }} key={index}>{`${p} `}</span>

        })}
        </div>
    </div>
}
export default FriendsPresentational


// Эта ошибка относится к коду на 47 строке """ className={props.currentPage === p && s.selectedPage} """
//index.js:1 Warning: Received `false` for a non-boolean attribute `className`.
//
// If you want to write it to the DOM, pass a string instead: className="false" or className={value.toString()}.