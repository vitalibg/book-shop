import React from "react";
import CopyrightComponent from "./copyright/copyright.component";
import RightsComponent from "./rights/rights.component";
import style from "./footer.module.css";

const FooterComponent = () => {
  return (
    <footer className={style.container}>
      <CopyrightComponent />
      <RightsComponent />
    </footer>
  );
};

export default FooterComponent;
