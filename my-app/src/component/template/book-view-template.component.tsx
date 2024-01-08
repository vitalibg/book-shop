import React from "react";
import HeaderComponent from "../header/header.component";
import FooterComponent from "../footer/footer.component";
import BookViewComponent from "../page/book-view/book-view.component";

const SignInTemplateComponent = () => {
  return (
    <>
      <HeaderComponent />
      <BookViewComponent />
      <FooterComponent />
    </>
  );
};

export default SignInTemplateComponent;
