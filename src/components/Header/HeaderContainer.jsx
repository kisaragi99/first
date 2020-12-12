import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMe} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return (<>  {(this.props.badResult === false) ? this.props.authMe() : null}
        {/*это сделано для того, чтобы севрху справа отобразилось изменение,*/}
        {/*то есть мы посылаем запрос на авторизацию*/}
        {/*только после того как получили положительный ответ спредыдущего запроса о логинизации*/}
                <Header {...this.props}/>
            </>
        );
    };
};

let mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        badResult: state.auth.badResult
    })
}

export default connect(mapStateToProps, {authMe})(HeaderContainer);




