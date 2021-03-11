import React, { useEffect } from "react";
import Dialogs from "./Dialogs";
import { addMessageCreator } from "../../redux/dialogs-reducer";
import { useDispatch, useSelector } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { intializeDialogs } from '../../redux/dialogs-reducer';
import Loader from '../Loaders/Loader';

const DialogsContainer = () => {
  const dialogsPage = useSelector((state) => state.dialogsPage);
  const dispatch = useDispatch();

  useEffect(()=>{
    intializeDialogs(15439)(dispatch);
  },[dispatch])
    
  return (
    !dialogsPage.initialized ? <Loader/> : 
    <Dialogs
      dialogsPage={dialogsPage}
      addMessage={(newMessageBody) => {
        dispatch(addMessageCreator(newMessageBody));
      }}
    />
  );

};

export default withAuthRedirect(DialogsContainer);