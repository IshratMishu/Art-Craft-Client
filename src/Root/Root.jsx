
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer />
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};


export default Root;
