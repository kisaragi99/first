import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextCreator(text));
    }
    return (<div><MyPosts postsData={state.profilePage.postsData}
                          addPost={addPost}
                          updateNewPostText={onPostChange}
                          name={"Ochir"}
                          newPostText={state.profilePage.newPostText}/></div>
    );
};
export default MyPostsContainer;