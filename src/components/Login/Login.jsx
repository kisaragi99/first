import React from "react";
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";



const LoginForm = (props) => {
    // const { handleSubmit } = props;

    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={"Login"} component={"input"} name={"login"}/></div>
                <div><Field placeholder={"Password"} component={"input"} name={"password"}/></div>
                <div><Field type={"checkbox"} component={"input"} name={"rememberMe"}/>Remember Me</div>
                <div><button>Login</button></div>
            </form>
        )
}

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
       props.loginMe(formData);
    }

    return (
        <div className={s.wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
            {props.badResult ? <div>You probably made a mistake in Login or Password</div> : null}
        </div>
    )
}

export default Login;