import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NewArrival from "./pages/NewArrival";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Studio from "./pages/Studio";
import Blog from "./pages/Blog";
import Product from "./component/Product";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/newarrival",
      element: <NewArrival />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/studio",
      element: <Studio />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/product",
      element: <Product />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
export default App;
