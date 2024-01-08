import React from "react";
import HeaderComponent from "../header/header.component";
import FooterComponent from "../footer/footer.component";
import NewReleasesComponent from "../page/new-releases/new-releases.component";

const NewReleaseTemplateComponent = () => {
  return (
    <>
      <HeaderComponent />
      <NewReleasesComponent />
      <FooterComponent />
    </>
  );
};

export default NewReleaseTemplateComponent;
