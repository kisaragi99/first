import React, { useEffect } from "react";
import Dialogs from "./Dialogs";
import { useDispatch, useSelector } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { getAllDialogs, getMessages, refreshDppState } from '../../redux/dialogs-reducer';

const DialogsContainer = () => {
  const dialogsPage = useSelector((state) => state.dialogsPage);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getAllDialogs());
  },[dispatch]);

  useEffect(()=>{
    dispatch(getMessages(dialogsPage.dialogs));
  },[dialogsPage.dialogs, dispatch]);

  useEffect(()=>{
    dispatch(refreshDppState());
  },[dispatch]);

  return (
    <Dialogs
      dialogsPage={dialogsPage}
    />
  );

};

export default withAuthRedirect(DialogsContainer);