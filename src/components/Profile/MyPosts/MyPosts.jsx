import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";

const maxLength10 =  maxLengthCreator(10);


const MyPosts = (props) => {

    let postsElements = props.profilePage.postsData.map((post => <Post message={post.message}
                                                                       likesCount={post.likesCount}
                                                                       key ={post.id}/>))

    const MyPostsForm = (props) =>{
        return(
            <form onSubmit={props.handleSubmit}>
                <h3 className={s.greet}>Hi, my name is {props.name}, and these are my posts.</h3>
                <div className={s.makePost}>
                    <div className={s.text1}>
                        <Field placeholder={"Enter Your Post Here"} name={"newPostBody"} component={"textarea"} validate={[required,maxLength10]}/>
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
            </form>
        )
    }

    const MyPostsReduxForm = reduxForm({form: "myPostsForm"})(MyPostsForm)


    let addPost = (value) => {
        props.addPost(value.newPostBody);
    }


    return (
        <MyPostsReduxForm onSubmit={addPost}/>
    );
};

export default MyPosts;