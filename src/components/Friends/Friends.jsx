import React from "react";
import s from "./Friends.module.css"
import * as axios from "axios";
import avatar from "../../assets/images/avatar.png"

class Friends extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setFriends(response.data.items)
            this.props.setTotalFriendsCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setFriends(response.data.items);

        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalFriendsCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (<div>

            {
                this.props.friends.map((friend =>
                        <div className={s.friendsBox} key={friend.id}>
                            <div>
                                <div>
                                    <img src={friend.photos.small != null ? friend.photos.small : avatar}
                                         className={s.friendsAvatar}/>
                                </div>
                                <div> {friend.followed ? <button onClick={() => {
                                        this.props.unfollow(friend.id)
                                    }}> Unfollow </button> :
                                    <button onClick={() => {
                                        this.props.follow(friend.id)
                                    }}>Follow</button>}
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div>{friend.name}</div>
                                    <div>{friend.status}</div>
                                </div>
                                <div>
                                    <div>{"props.location.country"}</div>
                                    <div>{"props.location.city"}</div>
                                </div>
                            </div>
                        </div>
                ))}
            <div> {pages.map(p => {
                return <span className={this.props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 this.onPageChanged(p)
                             }}>{`${p} `}</span>
            })}
            </div>
        </div>)
    }
}

export default Friends;