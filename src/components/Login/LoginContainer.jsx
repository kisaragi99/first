import React from "react";
import Login from "./Login";
import {loginMe} from "../../redux/auth-reducer";
import {connect} from "react-redux";



class LoginContainer extends React.Component{

    componentDidMount() {

    }

    render() {
        return (
            <Login loginMe={this.props.loginMe}/>
        );
    };

}
let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps,{loginMe})(LoginContainer);
