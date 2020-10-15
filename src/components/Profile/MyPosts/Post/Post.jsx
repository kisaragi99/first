import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.avatarAndMessage}>
        <img
        src="https://i1.sndcdn.com/artworks-000221273017-izy0jx-t500x500.jpg"
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
