import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
// import "./styles.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";


const Header = () => {
    const isAdmin = useAdmin();
    const isInstructor = useInstructor();

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localStorageTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localStorageTheme);
    }, [theme])

    const handleTheme = n => {
        if(n.target.checked){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }
    const { user, logOut } = useContext(AuthContext);
    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructor">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
               {
             user &&
            <li>
               {
                    isAdmin && <Link to='/dashboard/allusers'>Dashboard</Link>
                }
                
                {
                    isInstructor && <Link to='/dashboard/addClass'>Dashboard</Link>
                }
                {
                     isAdmin!==true  && isInstructor!==true &&
                     <Link to='/dashboard/selectedClasses'>Dashboard</Link>    
                }
            </li>

               }
        <li>
            <input onClick={handleTheme} type="checkbox" className="toggle toggle-md text-white" checked={theme === 'light' ? false : true} />
        </li>


    </>
    
    return (
        <div className="navbar fixed z-10 top-0 bg-base-300 max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold   ">
                        {navItems}
                    </ul>
                </div>
                <Link to="/">
                    <div className="flex justify-center items-center">
                        <img className="h-20" src="https://i.ibb.co/HgX4FbC/logo-chitrogolpo-removebg-preview.png" alt="" />
                    </div>
                </Link>
                <Link to="/">
                    <div className="">
                        <p className="text-xs md:text-xl font-bold">Chitro Golpo</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className=" flex items-center gap-5">
                            <img id="title" src={user?.photoURL} className="w-9 h-8 rounded-full" alt="" />
                            <ReactTooltip anchorId='title' content={user.displayName} />
                            <button className="btn btn-info btn-xs sm:btn-sm md:btn-md" onClick={logOut}>Logout</button>
                        </div>
                        :
                        <Link to="/login" className="btn btn-info btn-xs sm:btn-sm md:btn-md">Login</Link>
                }

            </div>
        </div>
    );
};

export default Header;