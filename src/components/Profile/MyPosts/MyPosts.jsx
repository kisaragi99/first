import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";



const MyPosts = (props) => {

    let postsElements = props.postsData.map((post => <Post message={post.message} likesCount={post.likesCount}/>))


    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostCreator());
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        //props.updateNewPostText();
        props.dispatch(updateNewPostTextCreator(text));
    }
    return (
        <div>
            <h3 className={s.greet}>Hi, my name is {props.name}, and these are my posts.</h3>
            <div className={s.makePost}>
                <div className={s.text1}>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button className={s.button1} onClick={addPost}>
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