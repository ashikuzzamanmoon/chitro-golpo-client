import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            // const saveUser = {name: loggedUser.displayName, photo: loggedUser.photoURL}
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            navigate(from, { replace: true });
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn} className="font-semibold flex items-center gap-2 text-xl btn btn-outline btn-info"> <img src="https://i.ibb.co/3T5SxcN/google.png" style={{ height: "18px" }} alt="" /> Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;