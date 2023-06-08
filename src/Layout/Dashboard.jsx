import { NavLink, Outlet } from "react-router-dom";
// import { FaWallet, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';


const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-blue-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><NavLink to="/dashboard/home">User Home</NavLink></li>
                        <li><NavLink to="/dashboard/history">Payment History</NavLink></li>
                        <li><NavLink to="/dashboard/allusers">All Users</NavLink></li>
                        <div className="divider"></div>
                        <li><NavLink to="/">Home</NavLink></li>
                       
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;