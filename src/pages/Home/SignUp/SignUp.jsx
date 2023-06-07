import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const SignUp = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    // const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const onSubmit = data => {
       console.log(data);
        setError('')
        setSuccess('')
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photo)
            .then(()=>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })
            .catch(error=>{console.log(error)})
            
            
        })
        .catch(error => setError(error.message))
    };


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img className="" src="https://i.ibb.co/xMSBjjj/login-image.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-2xl text-center font-bold">Please Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name="photo" placeholder="photo url" className="input input-bordered" />
                                {errors.photo && <span className="text-red-500">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-500">Password is required</span>}
                                {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one uppercase and one special character</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirmPassword", { required: true, minLength: 6,  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} name="confirmPassword" placeholder="confirm password" className="input input-bordered" />
                                {errors.confirmPassword && <span className="text-red-500">Confirm Password is required</span>}
                                {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one uppercase and one special character</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-info" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className='text-center'>
                            <p className='text-center fw-semibold mt-4'> Or Sign up with</p>
                            <hr className="my-3" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <SocialLogin></SocialLogin>
                        </div>
                        <div className='text-center mt-3'>
                            <p className='font-semibold'>Already have an account?<Link className="text-info" to="/login"> Please Login</Link> </p>
                        </div>
                        <p className='text-secondary text-center'>{success}</p>
                        <p className='text-secondary text-center'>{error}</p>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignUp;