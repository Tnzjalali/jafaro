import React from "react";
import EditFormIcon from "../../../assets/icons/Edit.svg";
import styled from "./EditForm.css";
const EditForm = (props) => {
  return (
    <div className={styled.EditForm} onClick={props.editFormClicked}>
      <img src={EditFormIcon} alt="edit" className={styled.EditFormIcon} />
      <span className={styled.EditFormText}>ویرایش</span>
    </div>
  );
};

export default EditForm;
