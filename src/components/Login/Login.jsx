import React from "react";
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators";


const LoginForm = (props) => {
    // const { handleSubmit } = props;

    return (<>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={"Login"} component={Input} name={"login"} validate={[required]}/></div>
                <div><Field placeholder={"Password"} component={Input} name={"password"} validate={[required]}/></div>
                <div><Field type={"checkbox"} component={Input} name={"rememberMe"}/>Remember Me</div>
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