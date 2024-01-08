import React from "react";
import TextComponent from "../../common/text.component";
import ParagraphComponent from "../../common/paragraph.component";
import InputFieldComponent from "../../common/input-field.component";
import ButtonComponent from "../../common/button.component";
import style from "./reset-password.module.css";
import { useNavigate } from "react-router-dom";

const ResetPasswordComponent = () => {
  const navigate = useNavigate();

  const handleSignInButton = () => {
    navigate("/reset-password/success");
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <TextComponent text={"Reset password"} />
        </div>

        <div className={style.formContainer}>
          <ParagraphComponent
            text={"Cubilia dui felis omittantur deseruisse definiebas consul interesset urbanitas dapibus"}
          />

          <div className={style.inputField}>
            <InputFieldComponent label={"Email:"} type={"email"} placeholder={"Your email"} />
          </div>
          <ButtonComponent type={"submit"} content={"Submit"} onClick={handleSignInButton} />
        </div>
      </div>
    </>
  );
};

export default ResetPasswordComponent;
