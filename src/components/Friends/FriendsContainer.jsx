import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalFriendsCountAC,
    setUsersAC,
    toggleIsLoadingAC,
    unfollowAC
} from "../../redux/friendsReducer";
import * as axios from "axios";
import FriendsPresentational from "./FriendsPresentational";
import Loader from "../Loaders/Loader";

class FriendsContainer extends React.Component {

    componentDidMount() {
            this.props.toggleIsLoading(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setFriends(response.data.items)
            this.props.setTotalFriendsCount(response.data.totalCount)
            this.props.toggleIsLoading(false);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsLoading(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setFriends(response.data.items);
            this.props.toggleIsLoading(false);

        })
    }

    render() {
        return (<>{this.props.isLoading ? <Loader/> : null}
            <FriendsPresentational friends={this.props.friends}
                                   follow={this.props.follow}
                                   unfollow={this.props.unfollow}
                                   currentPage={this.props.currentPage}
                                   onPageChanged={this.onPageChanged}
                                   totalFriendsCount={this.props.totalFriendsCount}
                                   pageSize={this.props.pageSize}/>
        </>)
    }
}


let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
        isLoading: state.friendsPage.isLoading
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (friendId) => {
            dispatch(followAC(friendId))
        },
        unfollow: (friendId) => {
            dispatch(unfollowAC(friendId))
        },
        setFriends: (friends) => {
            dispatch(setUsersAC(friends))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalFriendsCount: (totalCount) => {
            dispatch(setTotalFriendsCountAC(totalCount))
        },
        toggleIsLoading: (isLoading) => {
            dispatch(toggleIsLoadingAC(isLoading))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer)




