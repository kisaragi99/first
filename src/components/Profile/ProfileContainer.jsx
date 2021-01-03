import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);

    }

    render() {
        // if (!this.props.isAuth) return <Redirect to={"/login"}/> // redirect if user is not authorized
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }

};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId
    }}


export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)


