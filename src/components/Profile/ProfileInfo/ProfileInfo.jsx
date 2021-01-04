import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus.jsx"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.avatarWrapper}>
                <img src={props.profile.photos.large} className={s.avatar} alt='avatar'/>
                <div className={s.description}>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>Name:</div> {props.profile.fullName}</div>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>About me:</div> {props.profile.aboutMe} </div>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>FB:</div> <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a> </div>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>VK:</div> <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a> </div>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>Twitter: </div> <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a> </div>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>GitHub:</div> <a href={props.profile.contacts.github}>{props.profile.contacts.github}</a> </div>
                </div>
            </div>
        </div>
    )

};
export default ProfileInfo;