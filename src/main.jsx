import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// *! React DOM Router

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter } from "react-router";

import Layout from "./Layout.jsx";
import Home from "./Page/Home.jsx";
import About from "./Page/About.jsx";
import Contact from "./Page/Contact.jsx";
import SignUp from "./Page/SignUp.jsx";
import Shop from "./Page/Shop.jsx";
import SignIn from "./Page/SignIn.jsx"
import ErrorPage from "./Page/ErrorPage.jsx"
import CartSection from "./Page/CartSection.jsx";
import MyAccount from "./Page/MyAccount.jsx";
import CheckOut from "./Page/CheckOut.jsx";

// *! React Redux
// import { Provider } from 'react-redux'
// import store from './store'


// ! React DOM Router Page Setup

let router = createBrowserRouter([

  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "shop",
        Component: Shop,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "cart",
        Component: CartSection,
      },
      {
        path: "myaccount",
        Component: MyAccount,
      },
      {
        path: "CheckOut",
        Component: CheckOut,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
