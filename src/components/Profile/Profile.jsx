import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={s.wrapper}>
            <ProfileInfo/>
            <MyPosts name="Ochir" postsData={props.profilePage.postsData}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}
            />
        </div>
    )

};
export default Profile;


