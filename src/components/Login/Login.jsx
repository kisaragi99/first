import React from "react";
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    // const { handleSubmit } = props;

    return (<>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={"Login"} component={"input"} name={"login"}/></div>
                <div><Field placeholder={"Password"} component={"input"} name={"password"}/></div>
                <div><Field type={"checkbox"} component={"input"} name={"rememberMe"}/>Remember Me</div>
                <div>
                    <button>Login</button>
                </div>
            </form>
            <div>
                <button onClick={props.logout}>Logout</button>
            </div>
        </>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginMe(formData);
    }
    const onLogout = () => {
        props.logout();
    }

    return (
        <div className={s.wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} logout={onLogout}/>
            {props.badResult ?
                <div>You probably made a mistake in Login or Password</div>
                : props.badResult === false ?
                    <div>Login Success</div> : null}
        </div>
    )
}

export default Login; // надо продумать более правдоподобную систему. Нельзя использовать только ответ сервака. Надо еще что-то.