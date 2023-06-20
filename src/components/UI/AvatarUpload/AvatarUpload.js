import React from "react";
import Edit from "./Edit/Edit";
import Profile from "./Edit/Profile";
import ImgUpload from "./Edit/ImageUpload";
import Aux from "../../../hoc/Auxilary/Auxilary";
import DefaultProfileSvg from "../../../assets/icons/Dafault.svg";
class CardProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: DefaultProfileSvg,
      name: "",
      status: "",
      active: "edit",
    };
  }
  photoUpload(e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
    const avatarFile = file;
    this.props.onSelectAvatar(avatarFile);
  }
  editName(e) {
    const name = e.target.value;
    this.setState({
      name,
    });
  }
  editStatus(e) {
    const status = e.target.value;
    this.setState({
      status,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let activeP = this.state.active === "edit" ? "profile" : "edit";
    this.setState({
      active: activeP,
    });
  }
  render() {
    const { imagePreviewUrl, name, status, active } = this.state;

    return (
      <Aux>
        {active === "edit" ? (
          <Edit onSubmit={(e) => this.handleSubmit(e)}>
            <ImgUpload
              onChange={(e) => this.photoUpload(e)}
              src={imagePreviewUrl}
            />
          </Edit>
        ) : (
          <Profile
            onSubmit={(e) => this.handleSubmit(e)}
            src={imagePreviewUrl}
            name={name}
            status={status}
          />
        )}
      </Aux>
    );
  }
}

export default CardProfile;
