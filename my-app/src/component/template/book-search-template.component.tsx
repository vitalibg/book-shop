import React from "react";
import HeaderComponent from "../header/header.component";
import FooterComponent from "../footer/footer.component";
import BookSearchComponent from "../page/book-search/book-search.component";

const SignInTemplateComponent = () => {
  return (
    <>
      <HeaderComponent />
      <BookSearchComponent />
      <FooterComponent />
    </>
  );
};

export default SignInTemplateComponent;
