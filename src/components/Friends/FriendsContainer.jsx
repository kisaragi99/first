import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    toggleFollowingProcess, getUsers
} from "../../redux/friends-reducer";
import FriendsPresentational from "./FriendsPresentational";
import Loader from "../Loaders/Loader";


class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }


    render() {
        return (<>{this.props.isLoading ? <Loader/> : null}
            <FriendsPresentational friends={this.props.friends}
                                   follow={this.props.follow}
                                   unfollow ={this.props.unfollow}
                                   currentPage={this.props.currentPage}
                                   onPageChanged={this.onPageChanged}
                                   totalFriendsCount={this.props.totalFriendsCount}
                                   pageSize={this.props.pageSize}
                                   followingInProcess={this.props.followingInProcess}/>
        </>)
    }
}


let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
        isLoading: state.friendsPage.isLoading,
        followingInProcess: state.friendsPage.followingInProcess
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    //setCurrentPage,
    toggleFollowingProcess,
    getUsers
})(FriendsContainer)

