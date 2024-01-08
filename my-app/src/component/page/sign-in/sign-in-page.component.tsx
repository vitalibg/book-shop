import React from "react";
import signInStyle from "./sign-in.module.css";
import style from "../../../style/all.module.css";
import ButtonComponent from "../../common/button.component";
import TextComponent from "../../common/text.component";
import InputFieldComponent from "../../common/input-field.component";
import { Link, useNavigate } from "react-router-dom";
import HeaderComponent from "../../header/header.component";
import FooterComponent from "../../footer/footer.component";

const SignInPageComponent = () => {
  const navigate = useNavigate();

  const handleSignInButton = () => {
    navigate("/sign-in/success");
  };

  return (
    <>
      <HeaderComponent />
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

          <div className={signInStyle.userSupport}>
            <Link to={"/reset-password"}>Forgot password</Link>
            <div className={signInStyle.signUp}>
              {"Don`t have an account? "} <Link to={"/sign-up"}>Sign Up</Link>
            </div>
          </div>

          <ButtonComponent type={"button"} content={"Sign In"} onClick={handleSignInButton} />
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default SignInPageComponent;
