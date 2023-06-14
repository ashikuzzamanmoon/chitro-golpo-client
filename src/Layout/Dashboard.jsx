import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaUsers, FaClipboardList, FaPeopleArrows, FaPeopleCarry, } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {
    const isAdmin = useAdmin()
    const isInstructor = useInstructor();


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
                        {
                            isAdmin && <>
                             
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                                <li><NavLink to="/dashboard/manageClasses"><FaClipboardList></FaClipboardList> Manage Classes</NavLink></li>
                            </>
                        }
                        {
                            isInstructor && <>
                                <li><NavLink to="/dashboard/addClass">Add a Class</NavLink></li>
                                <li><NavLink to="/dashboard/myClasses">My Classes</NavLink></li>
                            </>
                        }
                        {
                            isAdmin || isInstructor ?
                            <>
                            </>
                              :
                                <>
                      
                                    <li><NavLink to="/dashboard/selectedClasses"><FaPeopleArrows></FaPeopleArrows> Selected Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/enrolledClasses"><FaPeopleCarry></FaPeopleCarry>Enrolled Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                                </>
                                
                        }

                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;