import React from "react";
import s from "./Friends.module.css";
import avatar from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";
import Pagination from "../common/Paginators/Pagination";
import Friend from "./Friend";


let FriendsPresentational = ({totalFriendsCount, pageSize, friends, followingInProcess, follow, unfollow, currentPage, onPageChanged, ...props}) => {

    return <div>
        {
        friends.map((friend => <Friend key={friend.id}
                                       className={s.friendsBox}
                                       followingInProcess={followingInProcess}
                                       follow={follow}
                                       unfollow={unfollow}
                                       friend={friend}/>))
        }

        <Pagination currentPage={currentPage}
                    totalFriendsCount={totalFriendsCount}
                    pageSize={pageSize}
                    onPageChanged={onPageChanged}/>
    </div>
}
export default FriendsPresentational


// Эта ошибка относится к коду на 47 строке """ className={props.currentPage === p && s.selectedPage} """
//index.js:1 Warning: Received `false` for a non-boolean attribute `className`.
//
// If you want to write it to the DOM, pass a string instead: className="false" or className={value.toString()}.