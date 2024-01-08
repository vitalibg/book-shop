import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewReleaseTemplateComponent from "./component/template/new-release-template.component";
import SignInTemplateComponent from "./component/template/sign-in-template.component";
import SignUpTemplateComponent from "./component/template/sign-up-template.component";
import CartTemplateComponent from "./component/template/cart-template.component";
import BookmarksTemplateComponent from "./component/template/bookmarks-template.component";
import BookSearchComponent from "./component/page/book-search/book-search.component";
import BookViewComponent from "./component/page/book-view/book-view.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<NewReleaseTemplateComponent />} />
          <Route path={"/sign-in"} element={<SignInTemplateComponent />} />
          <Route path={"/sign-up"} element={<SignUpTemplateComponent />} />
          <Route path={"/cart"} element={<CartTemplateComponent />} />
          <Route path={"/bookmarks"} element={<BookmarksTemplateComponent />} />
          <Route path={"/book-search/:bookId"} element={<BookSearchComponent />} />
          <Route path={"/book-view/:bookId"} element={<BookViewComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
