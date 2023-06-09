import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    
    const {data: isAdmin} = useQuery({
        queryKey: ['isAdmin', user?.email],
        
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000//users/admin/${user?.email}`);
            return res.data
        }
    })
    console.log(isAdmin);
    return isAdmin
   
}
export default useAdmin;