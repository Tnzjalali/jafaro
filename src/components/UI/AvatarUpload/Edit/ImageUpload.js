import React from "react";
import styled from "./Avatar.css";
const ImgUpload = (props) => {
  return (
    <label htmlFor="photo-upload" className={styled.imgUploadLabel}>
      <div className={styled.imgUpload}>
        <img htmlFor="photo-upload" src={props.src} alt="profile" />
      </div>
      <input
        id="photo-upload"
        type="file"
        accept="image/jpeg"
        onChange={props.onChange}
        className={styled.imgUploadInput}
      />
    </label>
  );
};
export default ImgUpload;
