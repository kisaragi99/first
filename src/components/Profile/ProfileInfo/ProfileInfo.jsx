import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatar from "./../../../assets/images/avatar.png"

const ProfileInfo = ({isOwner ,profile, status, updateStatus, savePhoto}) => {

    const onMainPhotoSelected = (e)=> {
       if(e.target.files.length){
           savePhoto(e.target.files[0])
       }
    }

    return (
        <div>
            <div className={s.avatarWrapper}>
                <img src={profile.photos.large || avatar} className={s.avatar} alt='avatar'/>
                <div className={s.description}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                    {/*Вынести дивку в отдельный компонент. Компонент рендерить через Object.keys*/}
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>Name:</div> {profile.fullName}</div>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>About me:</div> {profile.aboutMe} </div>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>FB:</div> <a href={profile.contacts.facebook}>{profile.contacts.facebook}</a> </div>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>VK:</div> <a href={profile.contacts.vk}>{profile.contacts.vk}</a> </div>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>Twitter: </div> <a href={profile.contacts.twitter}>{profile.contacts.twitter}</a> </div>
                    <div className={s.profileInfo}><div className={s.profileInfoTitle}>GitHub:</div> <a href={profile.contacts.github}>{profile.contacts.github}</a> </div>


                </div>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            </div>
        </div>
    )

};
export default React.memo(ProfileInfo);