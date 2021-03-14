import React, { useEffect } from "react";
import Dialogs from "./Dialogs";
import { useDispatch, useSelector } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { intializeDialogs } from '../../redux/dialogs-reducer';
import Loader from '../Loaders/Loader';
import {getDialogs} from '../../redux/dialogs-selectors';

const DialogsContainer = () => {
  const dialogsPage = useSelector((state) => state.dialogsPage);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(intializeDialogs(dialogsPage.dialogs));
  },[dialogsPage.dialogs, dispatch])

  return (
    !dialogsPage.initialized ? <Loader/> : 
    <Dialogs
      dialogsPage={dialogsPage}
    />
  );

};

export default withAuthRedirect(DialogsContainer);