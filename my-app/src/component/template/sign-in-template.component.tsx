import React from "react";
import HeaderComponent from "../header/header.component";
import FooterComponent from "../footer/footer.component";
import SignInComponent from "../page/sign-in/sign-in.component";

const SignInTemplateComponent = () => {
  return (
    <>
      <HeaderComponent />
      <SignInComponent />
      <FooterComponent />
    </>
  );
};

export default SignInTemplateComponent;
