import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
    const { logOut, user } = useAuth();


    const linkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#FF497C" : "",
            background: isActive ? "none" : "none",
            fontSize: isActive ? "18px" : "18px"
        };
    };


    const links = <>

        <li><NavLink to='/' style={linkStyle}>Home</NavLink></li>
        <li><NavLink to='/allCraftItem' style={linkStyle}>All Art & craft Items</NavLink></li>
        <li><NavLink to='/addCart' style={linkStyle}>Add Craft Item</NavLink></li>
        <li><NavLink to='/artAndCraftList' style={linkStyle}>My Art&Craft List</NavLink></li>
        {/* <li><NavLink to='/contact' style={linkStyle}>Contact Us</NavLink></li> */}
    </>



    return (
        <div className="navbar fixed top-0 left-0 w-full z-10 p-5 font-poppins bg-[#f6d4c9]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl md:text-3xl">ClayCanvas</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="list" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full cursor-pointer">
                                    <img title={user?.displayName || 'User Name'} alt="Tailwind CSS Navbar component" src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/31dsFpW/icon-7797704-640.webp'} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                                <li>
                                    <a className="justify-between">{user?.displayName || 'User Name'}</a>
                                </li>
                                <li><a onClick={logOut}>Logout</a></li>
                            </ul>
                        </div>
                        :
                        <div className="flex flex-col md:flex-row gap-2">
                            <Link to="/login"><button className="border-2 font-bold p-1 hover:bg-red-300">Login</button></Link>
                            <Link to="/registration"><button className="border-2 font-bold p-1 hover:bg-red-300">Register</button></Link>
                        </div>
                }
            </div >
        </div >
    );
};

export default Navbar;