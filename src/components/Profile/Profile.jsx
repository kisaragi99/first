import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div className={s.wrapper}>
            <ProfileInfo/>
            <MyPostsContainer store = {props.store}
            />
        </div>
    )

};
export default Profile;


