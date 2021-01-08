import React from "react";
import s from "./Post.module.css";
import img from "../../../../../src/assets/images/imgForPostTemplate.jpg"

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.avatarAndMessage}>
        <img
        src={img}
        alt="logo"
      ></img>
      <div className={s.message}>{props.message}</div>
      </div>
      <div className={s.postLikes}>
        <span>Like!</span>
        <div>Like count: {props.likesCount}</div>
      </div>
    </div>
  );
};

export default Post;
