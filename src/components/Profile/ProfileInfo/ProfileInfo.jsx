import React, {useState, useRef, useEffect} from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatar from "./../../../assets/images/avatar.png"
import {useForm} from "react-hook-form";

const ProfileFormHooks = ({profile, updateProfile, userId}) => {

    const [propsProfile, setPropsProfile] = useState(profile);
    const prevPropsProfile = usePrevious(propsProfile);

    function usePrevious(value) {

        const ref = useRef();

        useEffect(() => {
            ref.current = value;
        }, [value]);

        return ref.current;
    }


    const {register, errors, handleSubmit} = useForm({
        defaultValues: {
            aboutMe: profile.aboutMe,
            vk: profile.contacts.vk,
            facebook: profile.contacts.facebook,
            twitter: profile.contacts.twitter,
            github: profile.contacts.github
        }
    });


    const onSubmit = (data) => updateProfile(data, userId);


    return (<>
            <form onSubmit={handleSubmit(onSubmit)} className={s.description}>

                <input
                    type="text"
                    name={"aboutMe"}
                    ref={register({required: true, maxLength: 90})}
                    className={errors.aboutMe ? s.profileInfoError : s.profileInfo}
                />

                {errors.aboutMe && <div className={s.profileInfoMessageError}>Обязательно заполните это поле</div>}

                <input
                    type="text"
                    name="facebook"
                    ref={register({maxLength: 150})}
                    className={s.profileInfo}
                />

                <input
                    type="text"
                    name="vk"
                    ref={register({maxLength: 150})}
                    className={s.profileInfo}
                />

                <input
                    type="text"
                    name="twitter"
                    ref={register({maxLength: 150})}
                    className={s.profileInfo}
                />

                <input
                    type="text"
                    name="github"
                    ref={register({maxLength: 150})}
                    className={s.profileInfo}
                />

                {prevPropsProfile ? (!prevPropsProfile.aboutMe === profile.aboutMe ? console.log("Не равны") : console.log("Равны")) : null}

                <input type="submit" />
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