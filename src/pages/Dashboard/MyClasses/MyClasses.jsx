import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";


const MyClasses = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.email);
    const { data: classes = [] } = useQuery(['classes',user?.email], async () => {
        const res = await axios.get(`http://localhost:5000/classes?email=${user?.email}`)
        return res.data;
    })


    
    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Class Name</th>
                        <th>Status</th>
                        <th>Enrolled Students</th>
                        <th>Update</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classes?.map((classItem, index) => <tr
                            key={classItem._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>

                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={classItem.classImage} alt="Avatar Tailwind CSS Component" />
                                </div>

                            </td>
                            <td>
                                {classItem.className}
                            </td>
                            <td>
                                {classItem.status}
                            </td>
                            <td>
                                {classItem.enrolled}
                            </td>
                            <td>
                                <button  className="btn btn-ghost btn-xs">Update</button>
                            </td>
                            <td>
                                {}
                            </td>
                        </tr>
                        )
                    }

                </tbody>

            </table>
        </div>
    );
};

export default MyClasses;