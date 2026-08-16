import React, { createElement } from "react";
import { createHashRouter, RouterProvider, Outlet } from "react-router";
import ReactDom from "react-dom/client";
import "../../App.css"
import Header from "./Header";
import Body from "./Body";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Cart from "./Cart";
import SignIn from "./SignIn";
import Search from "./Search";
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
                element: <SignIn/>,
            },
            {
                path:"/search",
                element: <Search/>,
            }
            ],
        errorElement: <Error />
    }

])

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);