import React, {useState, useEffect} from "react";
import s from "./ProfileStatusWithHooks.module.css"

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () =>{
        setEditMode(true)
    }
    const deactivateEditMode = () =>{
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status])



    return (<div>
        { !editMode &&
        <div>
            <span onDoubleClick={activateEditMode} className={s.statusInput} >{props.status || "no-status"}</span>
        </div>}
        {editMode &&
        <div>
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                   value={status} className={s.statusInput}></input>
        </div>}

    </div>)
}

export default ProfileStatusWithHooks;