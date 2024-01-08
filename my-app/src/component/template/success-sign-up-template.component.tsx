import React from "react";
import HeaderComponent from "../header/header.component";
import FooterComponent from "../footer/footer.component";
import Success from "../page/success/success";

const SuccessSignInTemplateComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Success
        title={"Account is created"}
        bodyText={
          "Cubilia dui felis omittantur deseruisse definiebas consul interesset urbanitas dapibus cubilia dui felis omittantur deseruisse definiebas consul interesset urbanitas dapibus"
        }
        buttonText={"Sign In"}
        path={"/sign-in"}
      />
      <FooterComponent />
    </>
  );
};

export default SuccessSignInTemplateComponent;
