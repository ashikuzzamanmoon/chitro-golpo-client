import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useInstructor = () => {
    const {user} = useContext(AuthContext);

    const {data: isInstructor} = useQuery({
        queryKey: ['isInstructor', user?.email],
        
        queryFn: async () => {
            const res = await axios.get(`https://assignment-12-server-side-ivory.vercel.app/users/instructor/${user?.email}`);
            return res.data
        }
    })

    return isInstructor?.instructor;
};

export default useInstructor;