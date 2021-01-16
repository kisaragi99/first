import React from "react";
import s from "./FormControls.module.css";
import {Field} from "redux-form";

export const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : null)}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...props.input}{...props}/></FormControl>
}

export const Input = (props) => {
    return <FormControl {...props}><input{...props.input}{...props}/></FormControl>
}

export const createField = (placeholder, name, component, validators, props = {}, text="") => <div><Field placeholder={placeholder}
                                                                                            name={name}
                                                                                            component={component}
                                                                                            validate={validators}
                                                                                            {...props}/>{text}</div>;
