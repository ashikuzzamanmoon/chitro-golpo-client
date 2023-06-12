import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";


const Instructors = () => {
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
        <>
        
            <div className="mt-16">
                <div className="text-center">
                    <h2 className="text-5xl font-bold mb-6">Popular Instructors</h2>
                    <div className="flex justify-center">
                        <p className="mb-14 w-1/2 font-semibold">
                            Unleash your creativity with our renowned photography instructors. Learn from industry experts who possess a deep understanding and passion for the art form. </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {
                        instructors?.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default Instructors;