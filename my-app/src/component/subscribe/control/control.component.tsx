import React from "react";
import style from "./control.module.css";
import InputComponent from "../../common/input.component";
import ButtonComponent from "../../common/button.component";

const ControlComponent = () => {
  return (
    <div className={style.container}>
      <InputComponent type={"email"} placeholder={"Your email"} />
      <ButtonComponent type={"submit"} content={"Subscribe"} />
    </div>
  );
};

export default ControlComponent;
