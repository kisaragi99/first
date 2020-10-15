import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.postsData.map((post => <Post message={post.message} likesCount={post.likesCount}/>))

    return (
        <div>
            <h3 className={s.greet}>Hi, my name is {props.name}, and these are my posts.</h3>
            <div className={s.makePost}>
                <div className={s.text1}>
                    <textarea></textarea>
                </div>
                <div>
                    <button className={s.button1}>
                        Post
                    </button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;