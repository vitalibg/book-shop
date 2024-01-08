import React from "react";
import style from "./success-sign-up.module.css";
import TextComponent from "../../../common/text.component";
import ParagraphComponent from "../../../common/paragraph.component";
import ButtonComponent from "../../../common/button.component";
import { useNavigate } from "react-router-dom";

const SuccessSignUpComponent = () => {
  const navigate = useNavigate();

  const handlePressButton = () => {
    navigate("/sign-in");
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <TextComponent text={"Registration Confirmation"} />
        </div>

        <div className={style.formContainer}>
          <ParagraphComponent
            text={
              "Cubilia dui felis omittantur deseruisse definiebas consul interesset urbanitas dapibus cubilia dui felis omittantur deseruisse definiebas consul interesset urbanitas dapibus"
            }
          />
          <ButtonComponent type={"button"} content={"Sign In"} onClick={handlePressButton} />
        </div>
      </div>
    </>
  );
};

export default SuccessSignUpComponent;
