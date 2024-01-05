import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import IconComponent from "../../../common/icon.component";

const SignInUpComponent = () => {
  return (
    <div>
      <IconComponent icon={<FontAwesomeIcon icon={faRightToBracket} />} />
    </div>
  );
};

export default SignInUpComponent;
