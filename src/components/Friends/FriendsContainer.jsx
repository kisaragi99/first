import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalFriendsCountAC, setUsersAC, unfollowAC} from "../../redux/friendsReducer";

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId))
        },
        setFriends: (friends) =>{
            dispatch(setUsersAC(friends))
        },
        setCurrentPage: (currentPage)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalFriendsCount: (totalCount)=>{
            dispatch(setTotalFriendsCountAC(totalCount))
        }
    }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;


