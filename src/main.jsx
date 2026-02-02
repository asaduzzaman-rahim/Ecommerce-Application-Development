import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// *! React DOM Router

// import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
// import { BrowserRouter } from "react-router";


// *! React Redux 
// import { Provider } from 'react-redux'
// import store from './store'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </StrictMode>
)
