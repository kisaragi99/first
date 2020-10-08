import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            <div className={s.greet}>Hi, my name is {props.name}, and these are my posts.</div>
            <div className={s.posts}>
                <Post message="How are you" likes="3"/>
                <Post message="Hi, im fine" likes="1"/>
                <Post message="Hello there" likes="2"/>
            </div>
        </div>
    );
};

export default MyPosts;