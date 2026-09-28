import React, { createElement } from "react";
import { createHashRouter, RouterProvider, Outlet } from "react-router";
import ReactDom from "react-dom/client";
import "../../App.css"
import Header from "./Homepage/Header";
import Body from "./Homepage/Body";
import Error from "./Homepage/Error";
import RestaurantMenu from "./RestaurantMenu/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./Cart/Cart";
import SignIn from "./Authentication/SignIn";
import Search from "./Homepage/Search";
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
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/signin",
                element: <SignIn />,
            },
            {
                path: "/search",
                element: <Search />,
            }
            ],
        errorElement: <Error />
    }

])

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);