import React from "react";
import Dialogs from "./Dialogs";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer"

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageCreator());
    }
    let updateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text));
    }

    return (<div><Dialogs addMessage={addMessage}
                          updateNewMessageText={updateNewMessageText}
                          messages={state.dialogsPage.messages}
                          dialogs={state.dialogsPage.dialogs}
                          newMessageTempText={state.dialogsPage.newMessageTempText}/></div>)
}


export default DialogsContainer;
