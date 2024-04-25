import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import AllCraftItems from "../Pages/AllCraftItems/AllCraftItems";
import AddCart from "../Pages/AddCart/AddCart";
import ArtAndCraftList from "../Pages/ArtAndCraftList/ArtAndCraftList";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allCraftItem",
                element: <AllCraftItems></AllCraftItems>
            },
            {
                path: "/addCart",
                element: <AddCart></AddCart>
            },
            {
                path: "/artAndCraftList",
                element: <ArtAndCraftList></ArtAndCraftList>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
        ],
    },
]);

export default Router;