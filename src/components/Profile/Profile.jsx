import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loader from "../Loaders/Loader";


const Profile = (props) => {
    if (!props.profile) {
        return <Loader/>
    }

    return (
        <div className={s.wrapper}>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto}
                         updateProfile={props.updateProfile}
                         userId={props.userId}/>
            <MyPostsContainer/>

        </div>
    )

};
export default Profile;


