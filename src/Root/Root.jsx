import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from 'react-toastify';


const Root = () => {

    return (
        <div className="font-poppins">
            <Navbar />
            <ToastContainer />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </div>
    );
};


export default Root;
