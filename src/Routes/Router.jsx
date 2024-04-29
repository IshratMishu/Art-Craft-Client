import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import AllCraftItems from "../Pages/AllCraftItems/AllCraftItems";
import AddCart from "../Pages/AddCart/AddCart";
import ArtAndCraftList from "../Pages/ArtAndCraftList/ArtAndCraftList";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import UpdateProducts from "../Pages/UpdateProducts/UpdateProducts";
import FilteredCategory from "../Pages/FilteredCategory/FilteredCategory";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://full-stack-project-assignment10-server.vercel.app/potteries')
            },
            {
                path: "/allCraftItem",
                element: <AllCraftItems></AllCraftItems>,
                loader: () => fetch('https://full-stack-project-assignment10-server.vercel.app/potteries')
            },
            {
                path: "/addCart",
                element: <PrivateRoute><AddCart></AddCart></PrivateRoute>
            },
            {
                path: "/artAndCraftList",
                element: <PrivateRoute><ArtAndCraftList></ArtAndCraftList></PrivateRoute>
               
            },
            {
                path: "/viewDetail/:id",
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/updateProducts/:id",
                element: <PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute>,
                loader: ({params})=>fetch(`https://full-stack-project-assignment10-server.vercel.app/potteries/${params.id}`)
            },
            {
                path: "/filteredCategory/:subcategory",
                element: <FilteredCategory></FilteredCategory>
            }
        ],
    },
]);

export default Router;