import React from "react";
import HeaderComponent from "../header/header.component";
import FooterComponent from "../footer/footer.component";
import Success from "../page/success/success";

const SuccessSignInTemplateComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Success
        title={"Success"}
        bodyText={"Cubilia dui felis omittantur deseruisse definiebas consul interesset urbanitas dapibus"}
        buttonText={"Go to home"}
        path={"/"}
      />
      <FooterComponent />
    </>
  );
};

export default SuccessSignInTemplateComponent;
