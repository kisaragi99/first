import React from "react";
import s from "./FormControls.module.css";


export const Textarea = (props) => {

    const hasError = props.meta.touched && props.meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : null)}>
            <div>
                <textarea {...props.input}{...props}/>
            </div>
            {hasError && <span>{props.meta.error}</span>}
        </div>
    )
}


// - Здесь не всегда успевает прогрузиться что-то из пропсов, поэтому иногда просто не работает подсветка. (Профиль)
// + к этому, можно запостить пустую строку, а это значит что валдиатор не работает.
// P.S. - через 15 минут почему-то все нормализовалось.


export const Input = (props) => {

    const hasError = props.meta.touched && props.meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : null)}>
            <div>
                <input {...props.input}{...props}/>
            </div>
            {hasError && <span>{props.meta.error}</span>}
        </div>
    )
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

