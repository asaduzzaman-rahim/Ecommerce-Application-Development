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
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
