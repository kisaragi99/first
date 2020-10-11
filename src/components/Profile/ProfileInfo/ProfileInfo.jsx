import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className="content-image">
                <img
                    src="https://image.freepik.com/free-photo/wide-asphalt-road-with-buildings-on-the-horizon_1127-2192.jpg"
                    alt="mountains">
                </img>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    )

};
export default ProfileInfo;
