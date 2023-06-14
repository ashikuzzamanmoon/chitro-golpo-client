import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";


const AddClasses = () => {
    const {user}=useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        const classData={className:data.className,classImage:data.classImage,instructorName:data.instructorName,email:data.email,seat:data.seat,status:data.status,enrolled:0,price:data.price}
        fetch("https://assignment-12-server-side-ivory.vercel.app/classes",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(classData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
            <h2 className="text-2xl text-center font-bold">Add a Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input type="text" {...register("className", { required: true })} name="className" placeholder="Class Name" className="input input-bordered" />
                    {errors.className && <span className="text-red-500">Class Name is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="text" {...register("classImage", { required: true })} name="classImage" placeholder="Class Image" className="input input-bordered" />
                    {errors.classImage && <span className="text-red-500">Class Image is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input readOnly defaultValue={user?.displayName} type="text" {...register("instructorName", { required: true })} name="instructorName" placeholder="Instructor Name" className="input input-bordered" />
                    {errors.instructorName && <span className="text-red-500">Instructor Name is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Email</span>
                    </label>
                    <input readOnly defaultValue={user?.email} type="email" {...register("email")} name="email" placeholder="Instructor Email" className="input input-bordered" />
                    {errors.email && <span className="text-red-500">Instructor Email is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Seats</span>
                    </label>
                    <input type="number" {...register("seat", { required: true })} name="seat" placeholder="Available Seats" className="input input-bordered" />
                    {errors.seat && <span className="text-red-500">Available Seats is required</span>}
                </div>
                <div className="form-control hidden">
                    <label className="label">
                        <span className="label-text">Status</span>
                    </label>
                    <input type="text" defaultValue={'pending'} {...register("status")} name="seat" placeholder="Available Seats" className="input input-bordered" />
                    {errors.seat && <span className="text-red-500">Available Seats is required</span>}
                </div>
                {/* <div className="form-control hidden">
                    <label className="label">
                        <span className="label-text">Status</span>
                    </label>
                    <input type="number" defaultValue={0} {...register("enrolled")} name="seat" placeholder="Available Seats" className="input input-bordered" />
                    {errors.seat && <span className="text-red-500">Available Seats is required</span>}
                </div> */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} name="price" placeholder="Price" className="input input-bordered" />
                    {errors.price && <span className="text-red-500">Price is required</span>}
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-info" type="submit" value="Add" />
                </div>
            </form>
         
        </div>
    </div>
    );
};

export default AddClasses;