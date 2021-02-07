import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatar from "./../../../assets/images/avatar.png"
import {useForm} from "react-hook-form";


const ProfileFormHooks = ({profile, updateProfile, userId}) => {
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data) => {
        updateProfile(data, userId);
    };


    const FieldItemForLink = ({itemName, link}) => {
        return (
            <input
                type="url"
                name={itemName}
                ref={register({maxLength: 150})}
                className={s.profileInfo}
                placeholder={link}

            />
        )
    }
    const FieldItem = ({itemName, userDescription}) => {
        return (<>
                <input
                    type="text"
                    name={itemName}
                    ref={register({required: true, maxLength: 90})}
                    className={errors.aboutMe ? s.profileInfoError : s.profileInfo}
                    placeholder={userDescription}

                />
                {errors.aboutMe && <div className={s.profileInfoMessageError}>Обязательно заполните это поле</div>}
            </>

        )
    }

    return (<>
            <form onSubmit={handleSubmit(onSubmit)} className={s.description}>

                <FieldItem itemName="aboutMe" userDescription={profile.aboutMe}/>
                <FieldItemForLink itemName="facebook" link={profile.contacts.facebook}/>
                <FieldItemForLink itemName="vk" link={profile.contacts.vk}/>
                <FieldItemForLink itemName="twitter" link={profile.contacts.twitter}/>
                <FieldItemForLink itemName="github" link={profile.contacts.github}/>

                <input type="submit" className={s.profileInfo}/>
            </form>
        </>
    )
}

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto, updateProfile, userId}) => {

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const [showEdit, setShowEdit] = useState(false);

    const handleEdit = () => {
        setShowEdit(!showEdit)
    };
    console.log("profile info rendered")
    return (
        <div>
            <div className={s.avatarWrapper}>
                <img src={profile.photos.large || avatar} className={s.avatar} alt='avatar'/>
                <div className={s.description}>
                    {!showEdit && <>
                        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                        <div className={s.profileInfo}>
                            <div className={s.profileInfoTitle}>Name:</div>
                            {profile.fullName}</div>
                        <div className={s.profileInfo}>
                            <div className={s.profileInfoTitle}>About me:</div>
                            {profile.aboutMe} </div>
                        <div className={s.profileInfo}>
                            <div className={s.profileInfoTitle}>FB:</div>
                            <a href={profile.contacts.facebook}>{profile.contacts.facebook}</a></div>
                        <div className={s.profileInfo}>
                            <div className={s.profileInfoTitle}>VK:</div>
                            <a href={profile.contacts.vk}>{profile.contacts.vk}</a></div>
                        <div className={s.profileInfo}>
                            <div className={s.profileInfoTitle}>Twitter:</div>
                            <a href={profile.contacts.twitter}>{profile.contacts.twitter}</a></div>
                        <div className={s.profileInfo}>
                            <div className={s.profileInfoTitle}>GitHub:</div>
                            <a href={profile.contacts.github}>{profile.contacts.github}</a></div>
                    </>}

                    {showEdit && <ProfileFormHooks profile={profile} updateProfile={updateProfile} userId={userId}/>}
                </div>

                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

                <button onClick={handleEdit}
                        className={s.profileInfoButton}>{showEdit ? "Закрыть" : "Редактировать профиль"}</button>

            </div>
        </div>
    )


};
export default React.memo(ProfileInfo);