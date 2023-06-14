import { useQuery } from "@tanstack/react-query";
import { useContext} from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const SelectedClasses = () => {
    const {user}=useContext(AuthContext)

    const { data: classes = [], refetch } = useQuery(['carts',user?.email], async () => {
        const res = await axios.get(`https://assignment-12-server-side-ivory.vercel.app/carts?email=${user?.email}`)
        return res.data;
    })


  const handleDelete=(id)=>{
    fetch(`https://assignment-12-server-side-ivory.vercel.app/carts/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        refetch();
        if(data.deletedCount>0)
        {
            Swal.fire({
                title: 'success',
                text: 'item successfully deleted',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
      
  }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Instructor Name</th>
                        <th>Price</th>
                        <th>Seats</th>
                        <th>Pay</th>
                        <th>Delete</th>
              
                    </tr>
                </thead>
                <tbody>
                  {
                    classes?.map(classItem=><tr
                    key={classItem._id}
                    >
                        <td>

                        </td>
                        <td>
                            
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={classItem.imag} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                           
                        </td>
                        <td>
                            {classItem.name}
                        </td>
                        <td>
                            {classItem.instructorName}
                        </td>
                        <td>
                            ${classItem.price}
                        </td>
                        <td>
                            {classItem.seat}
                        </td>
                        <td>
                          <Link to={`/dashboard/payment/${classItem._id}`}>
                          <button className="btn btn-primary btn-xs">Pay</button>
                          </Link>
                        </td>
                        <td>
                            <button onClick={()=>handleDelete(classItem._id)} className="btn btn-primary bg-red-600 btn-xs"><FaTrashAlt></FaTrashAlt></button>
                        </td>
                    </tr>
                    )
                  }
                    
                </tbody>

            </table>
        </div>
    );
};

export default SelectedClasses;