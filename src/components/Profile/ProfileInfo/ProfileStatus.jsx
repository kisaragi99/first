import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({ // setState - is an async function.
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({ // setState - is an async function.
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) =>{
        this.setState({status: e.currentTarget.value});
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
        console.log(prevProps,prevState)
    }


    render() {
        return (<div>

            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status || "no-status"}</span>
            </div>}
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>
            </div>}

        </div>)
    }
}
export default ProfileStatus;