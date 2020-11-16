import React from "react";
import s from "./Friends.module.css";
import avatar from "../../assets/images/avatar.png";
import Loader from '../../components/Loaders/Loader'

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
                                <img src={friend.photos.small != null ? friend.photos.small : avatar}
                                     className={s.friendsAvatar}/>
                            </div>
                            <div> {friend.followed ? <button onClick={() => {
                                    props.unfollow(friend.id)
                                }}> Unfollow </button> :
                                <button onClick={() => {
                                    props.follow(friend.id)
                                }}>Follow</button>}
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
export default FriendsPresentational;