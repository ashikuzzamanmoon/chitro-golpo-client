

const SelectedClasses = () => {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
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
                    {/* row 1 */}
                    <tr>
                        <td>

                        </td>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            
                        </td>
                        <td>Purple</td>
                        <td>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default SelectedClasses;