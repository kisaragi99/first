import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    toggleFollowingProcess, getUsers
} from "../../redux/friends-reducer";
import FriendsPresentational from "./FriendsPresentational";
import Loader from "../Loaders/Loader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProcess,
    getFriends,
    getIsLoading,
    getPageSize,
    getTotalFriendsCount
} from "../../redux/friends-selectors";


class FriendsContainer extends React.Component {

    componentDidMount() {
        const {getUsers, currentPage, pageSize} = this.props;
        getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {getUsers, pageSize} = this.props;
        getUsers(pageNumber, pageSize)
    }

    render() {
        return (<>
            <FriendsPresentational friends={this.props.friends}
                                   follow={this.props.follow}
                                   unfollow={this.props.unfollow}
                                   currentPage={this.props.currentPage}
                                   onPageChanged={this.onPageChanged}
                                   totalFriendsCount={this.props.totalFriendsCount}
                                   pageSize={this.props.pageSize}
                                   followingInProcess={this.props.followingInProcess}/>
            {this.props.isLoading ? <Loader/> : null}
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        friends: getFriends(state),
        pageSize: getPageSize(state),
        totalFriendsCount: getTotalFriendsCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProcess: getFollowingInProcess(state)
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, toggleFollowingProcess, getUsers})
)(FriendsContainer);


