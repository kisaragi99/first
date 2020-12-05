import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({ // setState - is an async function.
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({ // setState - is an async function.
            editMode: false
        })
    }

    render() {
        return (<div>

            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
            </div>}
            {this.state.editMode &&
            <div>
                <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}></input>
            </div>}

        </div>)
    }
}
export default ProfileStatus;