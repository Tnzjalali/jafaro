import React from "react";
import styled from "./Avatar.css";
const Profile = (props) => {
  return (
    <div>
      <label className={styled.customFileUpload}>
        <div className="img-wrap">
          <img htmlFor="photo-upload" src={props.src} alt="profile" />
        </div>
      </label>
      <div className="name">{props.name}</div>
      <div className="status">{props.status}</div>
      <button type="submit" className="edit">
        Edit Profile{" "}
      </button>
    </div>
  );
};
export default Profile;
