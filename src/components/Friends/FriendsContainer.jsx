import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalFriendsCount,
    setFriends,
    toggleIsLoading,
    unfollow
} from "../../redux/friends-reducer";
import FriendsPresentational from "./FriendsPresentational";
import Loader from "../Loaders/Loader";
import {getUsers} from "../../api/api";

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsLoading(true);

        getUsers(this.props.currentPage, this.props.pageSize).then(data => {

            this.props.setFriends(data.items);
            this.props.setTotalFriendsCount(data.totalCount);
            this.props.toggleIsLoading(false);
        });

    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsLoading(true);
        this.props.setCurrentPage(pageNumber);

        getUsers(pageNumber, this.props.pageSize).then(data => {

            this.props.setFriends(data.items);
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setFriends,
    setCurrentPage,
    setTotalFriendsCount,
    toggleIsLoading
})(FriendsContainer)




