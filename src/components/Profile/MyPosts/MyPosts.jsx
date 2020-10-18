import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.postsData.map((post => <Post message={post.message} likesCount={post.likesCount}/>))

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div>
            <h3 className={s.greet}>Hi, my name is {props.name}, and these are my posts.</h3>
            <div className={s.makePost}>
                <div className={s.text1}>
                    <textarea ref = {newPostElement}></textarea>
                </div>
                <div>
                    <button className={s.button1} onClick={ addPost }>
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