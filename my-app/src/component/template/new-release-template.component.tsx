import React from "react";
import HeaderComponent from "../header/header.component";
import FooterComponent from "../footer/footer.component";
import NewReleasesPageComponent from "../page/new-releases/new-releases-page.component";

const NewReleaseTemplateComponent = () => {
  return (
    <>
      <HeaderComponent />
      <NewReleasesPageComponent />
      <FooterComponent />
    </>
  );
};

export default NewReleaseTemplateComponent;
