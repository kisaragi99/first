import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Japan_%281870%E2%80%931999%29.svg/220px-Flag_of_Japan_%281870%E2%80%931999%29.svg.png"
        alt="logo"
      ></img>
      {props.message}
      <div>
        <span>Like!</span>
        <h5>Like count: {props.likes}</h5>
      </div>
    </div>
  );
};

export default Post;
