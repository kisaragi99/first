import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, }) => {
    return (
        <div>
            <div className={s.avatarWrapper}>
                <img src={profile.photos.large} className={s.avatar} alt='avatar'/>
                <div className={s.description}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>Name:</div> {profile.fullName}</div>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>About me:</div> {profile.aboutMe} </div>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>FB:</div> <a href={profile.contacts.facebook}>{profile.contacts.facebook}</a> </div>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>VK:</div> <a href={profile.contacts.vk}>{profile.contacts.vk}</a> </div>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>Twitter: </div> <a href={profile.contacts.twitter}>{profile.contacts.twitter}</a> </div>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>GitHub:</div> <a href={profile.contacts.github}>{profile.contacts.github}</a> </div>
                </div>
            </div>
        </div>
    )

};
export default React.memo(ProfileInfo);