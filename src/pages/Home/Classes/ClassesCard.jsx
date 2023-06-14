import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";



const ClassesCard = ({ item }) => {
    const {user}=useContext(AuthContext)
    const navigate=useNavigate();
    const { name, classImage, email,className,seat,enrolled } = item;
  const isAdmin=useAdmin();
  const isInstructor=useInstructor();
    const handleAddToCart=(item)=>{
        console.log(item);
        const orderInfo={classId:item._id,name:item.className,imag:item.classImage,instructorName:item.instructorName,email:user?.email,price:item.price,seat:item.seat,enrolledStudents:item.enrolled}
        if(user)
        {
           fetch('http://localhost:5000/carts',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(orderInfo)
           })
           .then(res=>res.json())
           .then(data=>{
            if(data.insertedId)
            {
              Swal.fire({
                title: 'success!',
                text: 'class added to cart successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
           })
        }
        else
        {
          Swal.fire({
            title: 'warning!',
            text: 'please Login to select class',
            icon: 'warning',
            confirmButtonText: 'Cool'
          })
          navigate('/login')
        }
  
      }

    return (
        <div className={`card card-compact w-96 bg-base-100 shadow-xl ${seat==='0'?'bg-red-600':''}`}>
            <figure><img className="w-fit h-[270px]" src={classImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <p>{className}</p>
                <p>Seat :{seat}</p>
                <p>Enrolled :{enrolled}</p>
                <div className="card-actions justify-end">
                   {
                    isAdmin || isInstructor || seat==='0'
                    ?
                    <button disabled onClick={()=>handleAddToCart(item)} className="btn btn-primary">Buy Now</button>
                    :
                    <button onClick={()=>handleAddToCart(item)} className="btn btn-primary">Buy Now</button>
                   }
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;