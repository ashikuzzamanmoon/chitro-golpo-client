import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";


const ManageClasses = () => {
    const { data: classes = [],refetch } = useQuery(['classes'], async () => {
        const res = await axios.get(`http://localhost:5000/classes/${true}`)
        return res.data;
    })

    const handleApprove = (id, approved) => {
        
        if (approved) {
            const details = { i: true }
            fetch(`http://localhost:5000/classes/${id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(details)
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    if (data.modifiedCount > 0) {

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'approved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                }
                )
        }
  else{
    const details = { i: false }
    fetch(`http://localhost:5000/classes/${id}`, {
        method: "PATCH",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(details)
    })
        .then(res => res.json())
        .then(data => {
            refetch()
            if (data.modifiedCount > 0) {

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'denied',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
        )
  }

    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Approve</th>
                        <th>Deny</th>
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
                            <td>{classItem.instructorName}</td>
                            <td>{classItem.seat}</td>
                            <td>${classItem?.price}</td>
                            <td>{classItem?.status}</td>

                            <td>
                                <button disabled={`${classItem.status==='approved' || classItem.status==='denied'?true:"" }`} onClick={() => handleApprove(classItem._id, true)} className="btn btn-primary btn-sm">
                                    Approve
                                </button>
                            </td>
                            <td>
                                <button disabled={`${classItem.status==='approved' || classItem.status==='denied'?true:"" }`}  onClick={() => handleApprove(classItem._id, false)} className="btn btn-primary btn-sm">
                                    Deny
                                </button>
                            </td>
                            <td>
                                <button disabled={`${classItem.status==='approved' ? true:'' }`}  className="btn btn-primary btn-sm">
                                    Feedback
                                </button>
                            </td>

                        </tr>
                        )
                    }



                </tbody>
            </table>
        </div>
    );
};

export default ManageClasses;