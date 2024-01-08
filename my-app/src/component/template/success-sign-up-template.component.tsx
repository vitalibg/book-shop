import React from "react";
import HeaderComponent from "../header/header.component";
import FooterComponent from "../footer/footer.component";
import SuccessSignUpComponent from "../page/success/sign-up/success-sign-up.component";

const SuccessSignInTemplateComponent = () => {
  return (
    <>
      <HeaderComponent />
      <SuccessSignUpComponent />
      <FooterComponent />
    </>
  );
};

export default SuccessSignInTemplateComponent;
