import React, { useEffect } from "react";
import Dialogs from "./Dialogs";
import { addMessageCreator } from "../../redux/dialogs-reducer";
import { useDispatch, useSelector } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import {getAllDialogs} from '../../redux/dialogs-reducer'


const DialogsContainer = () => {
  const dialogsPage = useSelector((state) => state.dialogsPage);

  const dispatch = useDispatch();

  useEffect(()=>{
    getAllDialogs()(dispatch);
  },[dispatch])

  return (
    <Dialogs
      dialogsPage={dialogsPage}
      addMessage={(newMessageBody) => {
        dispatch(addMessageCreator(newMessageBody));
      }}
    />
  );
};

export default withAuthRedirect(DialogsContainer);