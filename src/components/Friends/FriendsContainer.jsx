import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/friendsReducer";


let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends
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
        }
    }
}


const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;