import React from "react";
import HeaderComponent from "../header/header.component";
import FooterComponent from "../footer/footer.component";
import SignUpComponent from "../page/sign-up/sign-up.component";

const SignUpTemplateComponent = () => {
  return (
    <>
      <HeaderComponent />
      <SignUpComponent />
      <FooterComponent />
    </>
  );
};

export default SignUpTemplateComponent;
