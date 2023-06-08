import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";


const ClassesCard = ({ instructor }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const { name, image, email } = instructor;
    return (
        <div>
            <Transition
                show={isMounted}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
            >
                <div className="bg-gray-200 p-4 mt-4 rounded">
                    <img src={image} alt="Animation" className="mb-4" />
                    <h1 className="text-xl font-semibold">{name}</h1>
                    <p>{email}</p>
                </div>
            </Transition>
        </div>
    );
};

export default ClassesCard;