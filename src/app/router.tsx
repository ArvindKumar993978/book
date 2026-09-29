import {
  createBrowserRouter
} from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import HomePage from "@/pages/HomePage";
import SearchPage from "@/pages/SearchPage";
import BookDetailsPage from "@/pages/BookDetailsPage";
import NotFoundPage from "@/pages/NotFoundPage";

export const router =
  createBrowserRouter([
    {
      path: "/",

      element: <MainLayout />,

      children: [
        {
          index: true,
          element: <HomePage />
        },

        {
          path: "search",
          element: <SearchPage />
        },

        {
          path: "books/:id",
          element: <BookDetailsPage />
        }
      ]
    },

    {
      path: "*",
      element: <NotFoundPage />
    }
  ]);