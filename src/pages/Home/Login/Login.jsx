import { Link } from "react-router-dom";


const Login = () => {
    const handleLogin = () => {

    }

    const handleGoogleSignIn = () => {
        
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img className="" src="https://i.ibb.co/xMSBjjj/login-image.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-2xl text-center font-bold">Please Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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
                            <div>
                                <button onClick={handleGoogleSignIn} className="font-semibold flex items-center gap-2 text-xl btn btn-outline btn-info"> <img src="https://i.ibb.co/3T5SxcN/google.png" style={{ height: "18px" }} alt="" /> Google</button>
                            </div>
                        </div>
                        <div className='text-center mt-3'>
                            <p className='font-semibold'>Do not have an account?<Link className="text-info" to="/signup"> Please Register</Link> </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;