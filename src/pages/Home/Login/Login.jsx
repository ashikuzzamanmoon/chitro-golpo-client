import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const onSubmit = data => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                setError('')
                setSuccess('')
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    };


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img className="" src="https://i.ibb.co/xMSBjjj/login-image.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-2xl text-center font-bold">Please Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-500">Password is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-info" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className='text-center'>
                            <p className='text-center fw-semibold mt-4'> Or Sign in with</p>
                            <hr className="my-3" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <SocialLogin></SocialLogin>
                        </div>
                        <div className='text-center mt-3'>
                            <p className='font-semibold'>Do not have an account?<Link className="text-info" to="/signup"> Please Register</Link> </p>
                        </div>
                        <p className='text-secondary text-center'>{success}</p>
                        <p className='text-secondary text-center'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;