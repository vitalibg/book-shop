import React from "react";
import TextComponent from "../../common/text.component";
import style from "./success.module.css";
import ParagraphComponent from "../../common/paragraph.component";
import ButtonComponent from "../../common/button.component";
import { useNavigate } from "react-router-dom";

interface SuccessProps {
  title: string;
  bodyText: string;
  buttonText: string;
  path: string;
}

const Success = (props: SuccessProps) => {
  const navigate = useNavigate();

  const handlePressButton = () => {
    navigate(`${props.path}`);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <TextComponent text={`${props.title}`} />
        </div>
        <div className={style.formContainer}>
          <ParagraphComponent text={`${props.bodyText}`} />
          <ButtonComponent type={"button"} content={`${props.buttonText}`} onClick={handlePressButton} />
        </div>
      </div>
    </>
  );
};

export default Success;
