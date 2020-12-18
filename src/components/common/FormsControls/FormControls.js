import React from "react";
import s from "./FormControls.module.css";


export const FormControl = (props) => {
    const hasError = props.meta.touched && props.meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : null)}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{props.meta.error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...props.input}{...props}/></FormControl>
}

// - Здесь не всегда успевает прогрузиться что-то из пропсов, поэтому иногда просто не работает подсветка. (Профиль)
// + к этому, можно запостить пустую строку, а это значит что валдиатор не работает.
// P.S. - через 15 минут почему-то все нормализовалось.
// P.S. - 2   - снова в профайле проблемы. А в сообщениях нету проблемы...

export const Input = (props) => {
    return <FormControl {...props}><input{...props.input}{...props}/></FormControl>
}


// import React from "react";
//
// export const Textarea = ({input, meta, ...props}) =>{
//     return(
//         <div>
//             <textarea {...input}{...props}/>
//         </div>
//     )
// }

