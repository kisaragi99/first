import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
        <div className="content-image">
          <img
            src="https://image.freepik.com/free-photo/wide-asphalt-road-with-buildings-on-the-horizon_1127-2192.jpg"
            alt="mountains"
          ></img>
        </div>
        <MyPosts name = "Daniel"/>
    </div>
    
  );
};
export default Profile;