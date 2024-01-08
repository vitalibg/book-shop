import React from "react";
import TextComponent from "../../../common/text.component";
import style from "./success-sign-in.module.css";
import ParagraphComponent from "../../../common/paragraph.component";
import ButtonComponent from "../../../common/button.component";
import { useNavigate } from "react-router-dom";

const SuccessSignInComponent = () => {
  const navigate = useNavigate();

  const handlePressButton = () => {
    navigate("/");
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <TextComponent text={"Success"} />
        </div>

        <div className={style.formContainer}>
          <ParagraphComponent
            text={"Cubilia dui felis omittantur deseruisse definiebas consul interesset urbanitas dapibus"}
          />
          <ButtonComponent type={"button"} content={"Go to home"} onClick={handlePressButton} />
        </div>
      </div>
    </>
  );
};

export default SuccessSignInComponent;
