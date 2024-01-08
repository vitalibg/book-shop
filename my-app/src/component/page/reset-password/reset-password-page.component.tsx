import React from "react";
import TextComponent from "../../common/text.component";
import ParagraphComponent from "../../common/paragraph.component";
import InputFieldComponent from "../../common/input-field.component";
import ButtonComponent from "../../common/button.component";
import { useNavigate } from "react-router-dom";
import style from "../../../style/all.module.css";
import HeaderComponent from "../../header/header.component";
import FooterComponent from "../../footer/footer.component";

const ResetPasswordPageComponent = () => {
  const navigate = useNavigate();

  const handleSignInButton = () => {
    navigate("/reset-password/success");
  };

  return (
    <>
      <HeaderComponent />
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
      <FooterComponent />
    </>
  );
};

export default ResetPasswordPageComponent;
