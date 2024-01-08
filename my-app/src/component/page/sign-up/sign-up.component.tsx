import React from "react";
import TextComponent from "../../common/text.component";
import InputFieldComponent from "../../common/input-field.component";
import { Link } from "react-router-dom";
import ButtonComponent from "../../common/button.component";
import style from "./sign-up.module.css";

const SignUpComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <TextComponent text={"Sign Up"} />
      </div>

      <div className={style.formContainer}>
        <div className={style.inputField}>
          <InputFieldComponent label={"Name:"} type={"text"} placeholder={"Name"} />
        </div>

        <div className={style.inputField}>
          <InputFieldComponent label={"Email:"} type={"text"} placeholder={"Email"} />
        </div>

        <div className={style.inputField}>
          <InputFieldComponent label={"Password:"} type={"text"} placeholder={"Password"} />
        </div>

        <div className={style.inputField}>
          <InputFieldComponent label={"Confirm password:"} type={"text"} placeholder={"Password"} />
        </div>

        <div className={style.signUp}>
          {"Already have an account? "} <Link to={"/sign-in"}>Sign In</Link>
        </div>

        <ButtonComponent type={"button"} content={"Sign Up"} />
      </div>
    </div>
  );
};

export default SignUpComponent;
