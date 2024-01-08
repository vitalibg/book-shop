import React from "react";
import HeaderComponent from "../header/header.component";
import FooterComponent from "../footer/footer.component";
import ResetPasswordComponent from "../page/reset-password/reset-password.component";

const SuccessSignInTemplateComponent = () => {
  return (
    <>
      <HeaderComponent />
      <ResetPasswordComponent />
      <FooterComponent />
    </>
  );
};

export default SuccessSignInTemplateComponent;
