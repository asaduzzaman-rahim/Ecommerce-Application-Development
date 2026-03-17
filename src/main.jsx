import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"
import "./index.css";


// *! React Redux
import { store } from './app/store'
import { Provider } from 'react-redux'


// ! React DOM Router Page Setup










createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
