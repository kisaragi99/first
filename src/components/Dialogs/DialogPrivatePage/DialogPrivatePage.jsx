import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./DialogPrivatePage.module.css";
import { withRouter } from "react-router-dom";
import {
  getSomeUserMessages,
  getOpponentProfile,
  getSelfProfile,
  sendMessage,
  deleteMessage,
} from "../../../redux/dialogs-reducer";
import { useForm } from "react-hook-form";

const DialogPrivatePage = (props) => {
  /*================================= Variables =================================*/
  const dispatch = useDispatch();
  const dialogsPage = useSelector((state) => state.dialogsPage);
  const someUserMessages = dialogsPage.someUserMessages;

  //Здесь начинаются константы, которые не изменяются в зависимости от конкретного сообщения. Они уже есть при первом рендере.
  const opponentId = props.match.params.dialogId; // opponentId Получен из withRouter.
  const selfId = useSelector((state) => state.auth.userId);

  // Здесь, также, константы которые не изменяются, но они есть не сразу, а мы их получаем через useEffect, основанный на предыдущих константах.
  const opponentName = dialogsPage.opponentProfile.data.fullName;
  const opponentPhoto = dialogsPage.opponentProfile.data.photos.small;
  const selfPhoto = dialogsPage.selfProfile.data.photos.small;

  /*================================= Delete Message =================================*/
  const [selectedMessageId, setSelectedMessageId] = useState("");
  /*================================= Delete Message =================================*/

  /*================================= Variables =================================*/

  /*================================= UseEffects =================================*/
  useEffect(() => {
    if (opponentId !== undefined) {
      dispatch(getOpponentProfile(opponentId));
    }
  }, [dispatch, opponentId]);

  useEffect(() => {
    if (selfId !== undefined) {
      dispatch(getSelfProfile(selfId));
    }
  }, [dispatch, selfId]);

  useEffect(() => {
    dispatch(getSomeUserMessages(props.match.params.dialogId));
  }, [dispatch, props.match.params.dialogId]);
  /*================================= UseEffects =================================*/

  /*================================= Form logic =================================*/
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(sendMessage(opponentId, data.messageBody));
  };
  /*================================= Form logic =================================*/

  console.log("DPP Rendered");
  //
  const deleteButton = (
    <button
      onClick={() => {
        dispatch(deleteMessage(selectedMessageId));
        setSelectedMessageId("");
      }}
      className={s.deleteButton}
    >
      delete
    </button>
  );
  //

  return (
    // header with button and aite no jouhou
    <div className={s.wrapper}>
      <div className={s.header}>
        <button className={s.backButton} onClick={props.history.goBack}>
          Назад
        </button>
        <div className={s.friendInfo}>
          <div className={s.firendNameHeader}>{opponentName}</div>
          <div className={s.friendTime}>Something goes here</div>
        </div>
        {selectedMessageId === "" ? null : deleteButton}
      </div>
      {/* messages */}
      <div className={s.mainBody}>
        {someUserMessages.map((message, index) => {
          return (
            <div
              className={s.friendMessageWrapper}
              key={index}
              onClick={() => {
                setSelectedMessageId(message.id);
              }}
            >
              <img
                className={s.friendAvatar}
                src={message.senderId === selfId ? selfPhoto : opponentPhoto}
                alt=""
              ></img>
              <div className={s.friendInnerWrapper}>
                <div className={s.friendMessageName}>{message.senderName}</div>
                <div className={s.friendMessageBody}>{message.body}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/* footer */}
      <div
        className={s.footerWrapper}
        onClick={() => {
          setSelectedMessageId("");
        }}
      >
        <div className={s.footer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name={"messageBody"}
              ref={register({ required: true, maxLength: 500 })}
              className={errors.messageBody ? s.errorInput : s.normalInput}
            ></input>

            <input type="submit" className={s.footerButton} value="send" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default withRouter(DialogPrivatePage);
