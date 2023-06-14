import { useEffect, useState } from "react";

import { Fade } from "react-awesome-reveal";
import ClassesCard from "../Classes/ClassesCard";

const TopClasses = () => {
    const [myData,setMyData]=useState([]);
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-12-server-side-ivory.vercel.app/classes/${false}`)
            .then(res => res.json())
            .then(data => {
  
                const sliceData=data.slice(0,6)
               
                setMyData(sliceData);
            })
    }, [])

    useEffect(()=>{
        const sortedData=[...myData].sort((b,c)=>c.enrolled-b.enrolled)

        setClasses(sortedData);
    },[myData])
    return (
        <div className="mt-32">
        <Fade direction="left">
            <div className="text-center">
                <h2 className="text-5xl font-bold mb-6">Top Classes</h2>
                <div className="flex justify-center">
                    <p className="mb-14 md:w-1/2 font-semibold">
                        Unleash your creativity with our renowned photography instructors. Learn from industry experts who possess a deep understanding and passion for the art form. </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                {
                    classes?.map(item => <ClassesCard key={item._id} item={item}></ClassesCard>)
                }
            </div>
        </Fade>
    </div>
    );
};

export default TopClasses;