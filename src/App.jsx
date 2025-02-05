import { createBrowserRouter, Route, RouterProvider } from "react-router-dom"
import { AppLayout } from "./Applayout/Outlet"
import { Home } from "./components/Home"
import { Contact } from "./components/Contact"
import { Location } from "./components/Location"
import { Producets } from "./components/Producets"
import { SinglePageData } from "./components/singlePageData"
import { AddToCart } from "./components/AddToCart"
import { SearchProducets } from "./components/SearchProducets"
import "./App.css"
import LoginPage from "./Ui/LoginPage"
import SignInPage from "./Ui/SignInPage"

const App = () => {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/addtocart",
          element: <AddToCart />
        },
        {
          path: "/products",
          element: <Producets />
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signin",
          element: <SignInPage />
        },
        {
          path: "/searchProducts",
          element: <SearchProducets />
        },
        {
          path: "/singlepagedata/:id",
          element: <SinglePageData />,
        },
        {
          path: "/location",
          element: <Location />
        },
        {
          path: "/contact",
          element: <Contact />
        },
      ]
    },
  ])


  return <RouterProvider router={route} />

}
export default App