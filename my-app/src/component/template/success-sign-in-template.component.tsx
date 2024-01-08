import React from "react";
import HeaderComponent from "../header/header.component";
import FooterComponent from "../footer/footer.component";
import SuccessSignInComponent from "../page/success/sign-in/success-sign-in.component";

const SuccessSignInTemplateComponent = () => {
  return (
    <>
      <HeaderComponent />
      <SuccessSignInComponent />
      <FooterComponent />
    </>
  );
};

export default SuccessSignInTemplateComponent;
