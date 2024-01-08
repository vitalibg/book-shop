import React from "react";
import style from "./sign-in.module.css";
import ButtonComponent from "../../common/button.component";
import TextComponent from "../../common/text.component";
import InputFieldComponent from "../../common/input-field.component";
import { Link } from "react-router-dom";

const SignInComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <TextComponent text={"Sign In"} />
      </div>

      <div className={style.formContainer}>
        <div className={style.inputField}>
          <InputFieldComponent label={"Email:"} type={"text"} placeholder={"Your email"} />
        </div>

        <div className={style.inputField}>
          <InputFieldComponent label={"Password:"} type={"text"} placeholder={"Your password"} />
        </div>

        <div className={style.userSupport}>
          <Link to={"/reset-password"}>Forgot password</Link>
          <div className={style.signUp}>
            {"Don`t have an account? "} <Link to={"/sign-up"}>Sign Up</Link>
          </div>
        </div>

        <ButtonComponent type={"button"} content={"Sign In"} />
      </div>
    </div>
  );
};

export default SignInComponent;