import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyRecipes from "./components/pages/MyRecipes";
import OurFavorites from "./components/pages/OurFavorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/myrecipes",
    element: <MyRecipes />,
  },
  {
    path: "/ourfavorites",
    element: <OurFavorites />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
