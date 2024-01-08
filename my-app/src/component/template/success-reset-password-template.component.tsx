import React from "react";
import HeaderComponent from "../header/header.component";
import Success from "../page/success/success";
import FooterComponent from "../footer/footer.component";

const SuccessResetPasswordTemplateComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Success
        title={"Success"}
        bodyText={"Cubilia dui felis omittantur deseruisse definiebas consul interesset urbanitas dapibus"}
        buttonText={"Sign In"}
        path={"/sign-in"}
      />
      <FooterComponent />
    </>
  );
};

export default SuccessResetPasswordTemplateComponent;
