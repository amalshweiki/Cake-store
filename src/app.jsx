import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SharedLayout from "./components/SharedLayout";
import About from "./pages/About";

export function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}
