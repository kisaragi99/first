import React from "react";
import s from "./../common/FormsControls/FormControls.module.css"
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    // const { handleSubmit } = props;

    return (<>
            <form onSubmit={handleSubmit}>

                {createField("Login", "login", Input, [required])}
                {createField("Password", "password", Input, [required], {type: "password"})}
                {createField(null, "rememberMe", Input, null, {type: "checkbox"}, "remember me")}

                { captchaUrl && <img src={captchaUrl}/> }
                { captchaUrl && createField("Symbols from image", "captcha", [required],Input, {}) }

                {error && <div className={s.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({loginMe, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        loginMe(formData);
    }

    if (isAuth) {
        return <Redirect to={"profile"}/>
    }
    return (
        <div className={s.wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;