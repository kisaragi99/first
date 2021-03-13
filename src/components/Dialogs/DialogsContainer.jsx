import React, { useEffect } from "react";
import Dialogs from "./Dialogs";
import { useDispatch, useSelector } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { getMessages, intializeDialogs } from '../../redux/dialogs-reducer';
import Loader from '../Loaders/Loader';
// import {dialogsAPI} from '../../api/api'

const DialogsContainer = () => {
  const dialogsPage = useSelector((state) => state.dialogsPage);
  const dispatch = useDispatch();
  const dialogsArray = dialogsPage.dialogs; // список всех диалогов (это массив объектов, в которых есть id получателя, а также userName)

  useEffect(()=>{
    intializeDialogs(dialogsArray)(dispatch);
  },[dialogsArray,dispatch])
   

  // useEffect(()=>{
  //    getMessages(dialogsArray)(dispatch)
  //   },[dialogsArray, dispatch])
 
  return (
    !dialogsPage.initialized ? <Loader/> : 
    <Dialogs
      dialogsPage={dialogsPage}
    />
  );

};

export default withAuthRedirect(DialogsContainer);