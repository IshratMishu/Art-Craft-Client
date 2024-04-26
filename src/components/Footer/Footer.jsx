import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="p-10 bg-[#e5fee4] text-base-content font-poppins mt-10">
            <div className="footer md:flex md:justify-between max-w-6xl mx-auto">
                <aside>
                    <p className="text-4xl font-bold">ClayCanvas</p>
                    <p>Providing home decor pottery since 1992</p>
                    <p>Copyright © 2024 - All right reserved</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Free Guides</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
            </div>
            <footer className="footer footer-center px-10 py-4 mt-5 bg-[#e5fee4] text-base-content">
                <nav>
                    <h6 className="footer-title">Follow Us On</h6>
                    <div className="grid grid-flow-col gap-4">
                        <ImFacebook2 className="h-8 w-8" />
                        <FaTwitter className="h-8 w-8" />
                        <FaInstagramSquare className="h-8 w-8" />
                    </div>
                </nav>
            </footer>
        </footer>
    );
};

export default Footer;