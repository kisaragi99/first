import React from "react";
import s from "./../common/FormsControls/FormControls.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators";
import {Redirect} from "react-router-dom";



const LoginForm = (props) => {
    // const { handleSubmit } = props;

    return (<>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={"Login"} component={Input} name={"login"} validate={[required]}/></div>
                <div><Field placeholder={"Password"} component={Input} name={"password"} type={"password"} validate={[required]}/></div>
                <div><Field type={"checkbox"} component={Input} name={"rememberMe"}/>Remember Me</div>
                <div className={s.formSummaryError}>
                    Error
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginMe(formData);
    }

    if(props.isAuth){
        return <Redirect to={"profile"} />
    }
    return (
        <div className={s.wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;