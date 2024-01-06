import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewReleaseTemplateComponent from "./component/template/new-release-template.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<NewReleaseTemplateComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
