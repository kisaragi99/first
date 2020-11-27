import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {getProfileAPI} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 12530;
        }
        getProfileAPI(userId).then(data => {
            this.props.setUserProfile(data);
     })

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }


};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUlrDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile,getProfileAPI})(WithUlrDataContainerComponent);


