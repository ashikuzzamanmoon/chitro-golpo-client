import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";
import { Fade } from "react-awesome-reveal";


const Classes = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                const popularInstructors = data.slice(0, 6)
                setInstructors(popularInstructors);
            })
    }, [])
    return (
        <div className="mt-16">
            <Fade direction="left">
                <div className="text-center">
                    <h2 className="text-5xl font-bold mb-6">Top Classes</h2>
                    <div className="flex justify-center">
                        <p className="mb-14 w-1/2 font-semibold">
                            Unleash your creativity with our renowned photography instructors. Learn from industry experts who possess a deep understanding and passion for the art form. Elevate your skills and capture stunning images under their expert guidance. </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {
                        instructors?.map(instructor => <ClassesCard key={instructor._id} instructor={instructor}></ClassesCard>)
                    }
                </div>
            </Fade>
        </div>
    );
};

export default Classes;