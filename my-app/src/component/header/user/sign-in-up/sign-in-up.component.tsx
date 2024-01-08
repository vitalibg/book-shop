import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import IconComponent from "../../../common/icon.component";
import { Link } from "react-router-dom";

const SignInUpComponent = () => {
  return (
    <Link to={"/sign-in"}>
      <IconComponent icon={<FontAwesomeIcon icon={faRightToBracket} />} />
    </Link>
  );
};

export default SignInUpComponent;
