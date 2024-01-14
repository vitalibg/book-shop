import React from "react";
import "./style/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResultPageComponent from "./component/page/book-search/book-search-page.component";
import BookViewPageComponent from "./component/page/book-view/book-view-page.component";
import SuccessSignInTemplateComponent from "./component/template/success-sign-in-template.component";
import SuccessSignUpTemplateComponent from "./component/template/success-sign-up-template.component";
import SuccessResetPasswordTemplateComponent from "./component/template/success-reset-password-template.component";
import NewReleasesPageComponent from "./component/page/new-releases/new-releases-page.component";
import SignInPageComponent from "./component/page/sign-in/sign-in-page.component";
import ResetPasswordPageComponent from "./component/page/reset-password/reset-password-page.component";
import SignUpPageComponent from "./component/page/sign-up/sign-up-page.component";
import CartPageComponent from "./component/page/cart/cart-page-component";
import FavoritePageComponent from "./component/page/favorite/favorite-page.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<NewReleasesPageComponent />} />

          <Route path={"/sign-in"} element={<SignInPageComponent />} />
          <Route path={"/sign-in/success"} element={<SuccessSignInTemplateComponent />} />
          <Route path={"/reset-password"} element={<ResetPasswordPageComponent />} />
          <Route path={"/reset-password/success"} element={<SuccessResetPasswordTemplateComponent />} />

          <Route path={"/sign-up"} element={<SignUpPageComponent />} />
          <Route path={"/sign-up/success"} element={<SuccessSignUpTemplateComponent />} />

          <Route path={"/cart"} element={<CartPageComponent />} />
          <Route path={"/bookmarks"} element={<FavoritePageComponent />} />
          <Route path={`/search/:${localStorage.getItem("searchValue")}`} element={<SearchResultPageComponent />} />
          <Route path={"/books/:bookId"} element={<BookViewPageComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
