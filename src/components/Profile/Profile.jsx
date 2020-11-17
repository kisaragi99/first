import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loader from "../Loaders/Loader";


const Profile = (props) => {
    if(!props.profile){
        return <Loader/>
            }

    return (
        <div className={s.wrapper}>
            <ProfileInfo profile ={props.profile}/>
            <MyPostsContainer store = {props.store}
            />
        </div>
    )

};
export default Profile;


