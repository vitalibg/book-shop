import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewReleaseTemplateComponent from "./component/template/new-release-template.component";
import SignInTemplateComponent from "./component/template/sign-in-template.component";
import SignUpTemplateComponent from "./component/template/sign-up-template.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<NewReleaseTemplateComponent />} />
          <Route path={"/sign-in"} element={<SignInTemplateComponent />} />
          <Route path={"/sign-up"} element={<SignUpTemplateComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
