import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatar from "./../../../assets/images/avatar.png"
import { useForm } from "react-hook-form";

const ProfileFormHooks = ()=> {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)} className={s.description}>
            <input
            type="text"
            name="About me"
            ref={register({ required: true, maxLength: 90 })}
            className={s.profileInfo}
            placeholder="About me"
            />

            <input
                type="text"
                name="Facebook"
                ref={register({ required: true, maxLength: 90 })}
                className={s.profileInfo}
                placeholder="Facebook"
            />

            <input
                type="text"
                name="VK"
                ref={register({ required: true, maxLength: 90 })}
                className={s.profileInfo}
                placeholder="VK"
            />

            <input
                type="text"
                name="Twitter"
                ref={register({ required: true, maxLength: 90 })}
                className={s.profileInfo}
                placeholder="Twitter"
            />

            <input
                type="text"
                name="Github"
                ref={register({ required: true, maxLength: 90 })}
                className={s.profileInfo}
                placeholder="Github"
            />


            <input type="submit" className={s.profileInfo}/>
        </form>
    )


}


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
                     {true &&<>
                     <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                     <div className={s.profileInfo}><div className={s.profileInfoTitle}>Name:</div> {profile.fullName}</div>
                     <div className={s.profileInfo}><div className={s.profileInfoTitle}>About me:</div> {profile.aboutMe} </div>
                     <div className={s.profileInfo}><div className={s.profileInfoTitle}>FB:</div> <a href={profile.contacts.facebook}>{profile.contacts.facebook}</a> </div>
                     <div className={s.profileInfo}><div className={s.profileInfoTitle}>VK:</div> <a href={profile.contacts.vk}>{profile.contacts.vk}</a> </div>
                     <div className={s.profileInfo}><div className={s.profileInfoTitle}>Twitter: </div> <a href={profile.contacts.twitter}>{profile.contacts.twitter}</a> </div>
                     <div className={s.profileInfo}><div className={s.profileInfoTitle}>GitHub:</div> <a href={profile.contacts.github}>{profile.contacts.github}</a> </div>
                     </>}

                     { false && <ProfileFormHooks/>}
                 </div>

                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            </div>
        </div>
    )


};
export default React.memo(ProfileInfo);