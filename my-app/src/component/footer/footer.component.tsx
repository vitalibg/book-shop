import React from "react";
import CopyrightComponent from "./copyright/copyright.component";
import RightsComponent from "./rights/rights.component";
import style from "./footer.module.css";

const FooterComponent = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.wrap}>
          <div>
            <CopyrightComponent />
          </div>
          <div >
            <RightsComponent />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
