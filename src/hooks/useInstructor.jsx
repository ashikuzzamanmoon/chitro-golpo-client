import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useInstructor = () => {
    const {user} = useContext(AuthContext);

    const {data: isInstructor} = useQuery({
        queryKey: ['isInstructor', user?.email],
        
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users/instructor/${user?.email}`);
            return res.data
        }
    })
    console.log(isInstructor);
    return isInstructor;
};

export default useInstructor;