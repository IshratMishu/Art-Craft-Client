
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from 'react-toastify';


const Root = () => {
    const [showLoading, setShowLoading] = useState(true);

    setTimeout(() => {
        setShowLoading(false)
    }, 2000);

    return (
        <div>
            {
                showLoading ?
                    (<div className="h-screen flex font-bold text-3xl md:text-5xl items-center justify-center">
                        ClayPottery  <span className="loading loading-ring loading-lg"></span>
                        <span className="loading loading-ring loading-md"></span>
                        <span className="loading loading-ring loading-sm"></span>
                    </div>)
                    :
                    (<div>
                        <Navbar></Navbar>
                        <ToastContainer />
                        <Outlet></Outlet>
                        <Footer></Footer>
                        <ScrollRestoration></ScrollRestoration>
                    </div>)
            }
        </div>
    );
};


export default Root;
