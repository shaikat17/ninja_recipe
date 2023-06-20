import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import SharedLayout from "../layout/SharedLayout";
import Create from "../pages/create/Create";
import Search from "../pages/search/Search";
import Recipe from "../pages/recipe/Recipe";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/create",
            element: <Create />
        },
        {
            path: "/search",
            element: <Search />
        },
        {
            path: "/recipes/:id",
            element: <Recipe />
        },
      ]
    },
  ]);