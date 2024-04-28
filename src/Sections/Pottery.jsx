import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from "lottie-react";
import AI from '../assets/Animation - 1714103727641.json';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Pottery = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div data-aos="zoom-in" className="flex flex-col md:flex-row items-center justify-center mt-5 md:mt-20">
            <Lottie className="lg:w-[580px] w-auto" animationData={AI}></Lottie>
            <div className="lg:p-14 p-5 space-y-5 text-center lg:text-start">
                <h1 className="text-3xl font-bold">Shop our exquisite pottery collection, <br />curated since 1992.</h1>
                <p className='text-black/60 font-medium'>Elevate your space with our timeless creations. </p>
                <Link to='/error'><button className='bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#988087]'> Shop Now!</button></Link>
            </div>
        </div>
    );
};

export default Pottery;