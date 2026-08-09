import React, { createElement } from "react";
import { createHashRouter, RouterProvider, Outlet } from "react-router";
import About from "./About";
import ReactDom from "react-dom/client";
import "../../App.css"
import Header from "./Header";
import Body from "./Body";
import Error from "./Error";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./Cart";

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
    );
}
const approuter = createHashRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:
            [{
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            }
            ],
        errorElement: <Error />
    }

])

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);