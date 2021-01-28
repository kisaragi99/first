import React from "react";
import Login from "./Login";
import {loginMe} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class LoginContainer extends React.Component {


    render() {
        return (
            <Login loginMe={this.props.loginMe} isAuth={this.props.isAuth} captchaUrl={this.props.captchaUrl}/>
        );
    };
}

let mapStateToProps = (state) => {
    return {
        badResult: state.auth.badResult,
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {loginMe})(LoginContainer);