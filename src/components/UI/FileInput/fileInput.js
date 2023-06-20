import React from "react";
import Aux from "../../../hoc/Auxilary/Auxilary";
import styled from "./fileInput.css";
import Attach from "../../../assets/icons/Attach.svg";

class Uploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const materialFileInput = this.props.disabled ? styled.materialFileInputDisabled : styled.materialFileInput
    return (
      <Aux>
        <div className={styled.materialTextfield}>
          <div className={materialFileInput}>
            <img className={styled.attach} src={Attach} alt="Atc" />
            <input
              className={styled.input}
              placeholder="username"
              value={this.props.value}
              accept="image/png, image/jpeg"
              type="file"
              title="لطفا فایل مورد نظر خورد را انتخاب نمایید"
              id="upload-photo"
              multiple="multiple"
              onChange={this.props.onChange}
              name={this.props.name}
              disabled={this.props.disabled}
            />
            <label htmlFor="upload-photo" className={styled.label}>
              {this.props.labelText}
            </label>
            <br />
            {this.props.fileTitle && (
              <h4 className={styled.inputFileText}>
                <span className="text-danger">{this.props.fileTitle}</span>
              </h4>
            )}
          </div>
          <span className={styled.textHelper}>
            ​ * فایل وارد شده با فرمت های JPG , PNG باشه
          </span>
        </div>
      </Aux>
    );
  }
}

export default Uploader;
