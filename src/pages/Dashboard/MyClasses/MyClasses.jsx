

const MyClasses = () => {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Status</th>
                        <th>Enrolled Students</th>
                        <th>Update</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>

                        </td>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1205.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.2.1999469744.1683008976&semt=sph" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>
                            <button className="btn btn-ghost btn-xs">Update</button>
                        </td>
                        <td>
                            <button className="btn btn-ghost btn-xs">Feedback</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default MyClasses;