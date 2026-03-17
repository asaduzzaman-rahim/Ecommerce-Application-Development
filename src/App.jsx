import React from "react";
import "./App.css";
// *! React DOM Router

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter } from "react-router";

import Layout from "./Layout.jsx";
import Home from "./Page/Home.jsx";
import About from "./Page/About.jsx";
import Contact from "./Page/Contact.jsx";
import ErrorPage from "./Page/ErrorPage.jsx";
import CartSection from "./Page/CartSection.jsx";
import MyAccount from "./Page/MyAccount.jsx";
import CheckOut from "./Page/CheckOut.jsx";
import ProductDetailsPage from "./Page/ProductDetailsPage.jsx";
import WishListPage from "./Page/WishListPage.jsx";
import SignInPage from "./Page/SignInPage.jsx";
import SignUpPage from "./Page/SignUpPage.jsx";
import ShopPage from "./Page/Shop.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home},
      {path: "shop", Component: ShopPage},
      {path: "about",Component: About},
      {path: "contact", Component: Contact},
      {path: "signup",Component: SignUpPage},
      {path: "signin",Component: SignInPage},
      {path: "cart",Component: CartSection},
      {path: "wishlist",Component: WishListPage},
      {path: "myaccount",Component: MyAccount,},
      {path: "CheckOut",Component: CheckOut},
      {path: "ProductDetails",Component: ProductDetailsPage},
      {path: "*",Component: ErrorPage},
    ],
  },
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App;
