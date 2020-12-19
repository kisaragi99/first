import React from "react";
import Login from "./Login";
import {loginMe} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class LoginContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <Login loginMe={this.props.loginMe} isAuth={this.props.isAuth}/>
        );
    };
}

let mapStateToProps = (state) => {
    return {
        badResult: state.auth.badResult,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginMe})(LoginContainer);
