import React from "react";
import Login from "./Login";
import {loginMe} from "../../redux/auth-reducer";
import {connect} from "react-redux";



class LoginContainer extends React.Component{

    componentDidMount() {

    }

    render() {
        return (
            <Login loginMe={this.props.loginMe} badResult={this.props.badResult}/>
        );
    };

}
let mapStateToProps = (state) => {
    return {
        badResult: state.auth.badResult
    }
}

export default connect(mapStateToProps,{loginMe})(LoginContainer);
