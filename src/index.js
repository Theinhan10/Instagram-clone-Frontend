import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./Context/AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Components/RegisterContent/LoginPage/LoginPage";
import Home from "./Components/AllContent/HomePage/Home";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "./Context/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <h1>error</h1>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

//index.js is responsible for rendering the root component of the application into the DOM.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
