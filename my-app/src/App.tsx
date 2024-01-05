import React from "react";
import "./App.css";
import HeaderComponent from "./component/header/header.component";
import FooterComponent from "./component/footer/footer.component";
import SubscribeComponent from "./component/subscribe/subscribe.component";
import PaginationComponent from "./component/pagination/pagination.component";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <PaginationComponent />
      <SubscribeComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
