import React from 'react'
import Dialogs from "./Dialogs";
import {addMessageCreator} from "../../redux/dialogs-reducer"
import { useDispatch, useSelector} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

const DialogsContainer = () => {
    const dialogsPage = useSelector(state => state.dialogsPage);
    const dispatch = useDispatch();

    return (
        <Dialogs dialogsPage={dialogsPage} addMessage = {(newMessageBody)=>{dispatch(addMessageCreator(newMessageBody))}}/>
    )
}

export default withAuthRedirect(DialogsContainer);
