import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12530;
        }
        this.props.getProfile(userId);

    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/> // redirect if user is not authorized

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }


};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUlrDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, getProfile})(WithUlrDataContainerComponent);


