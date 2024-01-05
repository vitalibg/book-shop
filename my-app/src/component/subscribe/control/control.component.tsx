import React from "react";
import style from "./control.module.css";

const ControlComponent = () => {
  return (
    <div className={style.container}>
      <input className={style.input} type={"email"} placeholder={"Your email"} />
      <button className={style.button} type={"submit"}>
        {"Subscribe"}
      </button>
    </div>
  );
};

export default ControlComponent;
