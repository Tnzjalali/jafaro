import React from "react";

import contactCall from "../../../assets/icons/ContactCall.svg";
import Aux from "../../../hoc/Auxilary/Auxilary";
import { colors } from "@material-ui/core";

const ContactCall = () => {
  return (
    <Aux>
      <img src={contactCall} alt="contactPin" />
    </Aux>
  );
};
export default ContactCall;
