import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsData = [
        {id: 1, message: "How are you?", likesCount: 3},
        {id: 2, message: "Hi, im fine", likesCount: 1},
        {id: 3, message: "Log", likesCount: 4},
        {id: 4, message: "Console", likesCount: 5},
        {id: 5, message: "Opposite", likesCount: 6},
        {id: 6, message: "Lorem", likesCount: 12}
        ];
    let postsElements = postsData.map((post => <Post message={post.message} likesCount={post.likesCount}/>))


    return (
        <div>
            <h3 className={s.greet}>Hi, my name is {props.name}, and these are my posts.</h3>
            <div className={s.text1}>
                <textarea></textarea>
            </div>
            <div>
                <button className={s.button1}>
                    Post
                </button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;