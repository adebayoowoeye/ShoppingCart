import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
// import Contact from "./components/pages/Contact.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },

//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
