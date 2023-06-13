


const ClassesCard = ({ item }) => {
   const handleAddToCart=()=>{

   }

    const { name, classImage, email,className,seat } = item;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="w-fit h-[270px]" src={classImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <p>{className}</p>
                <p>{seat}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleAddToCart()} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;