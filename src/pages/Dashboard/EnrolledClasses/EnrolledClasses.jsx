import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const EnrolledClasses = () => {
    const {user}=useContext(AuthContext)
    const { data: payments = [] } = useQuery(['payments',user?.email], async () => {
        const res = await axios.get(`https://assignment-12-server-side-ivory.vercel.app/payments/${user?.email}`)
        return res.data;
    })

    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Class Name</th>
                        <th>User Email</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
              {
                payments?.map((item,index)=>  <tr
                key={item._id}
                >
                    <td>
                    {index+1}
                    </td>
                    <td>
                        
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={item.imag} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                   
                    </td>
                    <td>
                    {item.name}
                    </td>
                    <td>{user?.email}</td>
                    <td>
                 ${item.price}
                    </td>
                </tr>)
              }
                  
                </tbody>

            </table>
        </div>
    );
};

export default EnrolledClasses;