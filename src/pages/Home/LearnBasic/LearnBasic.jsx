import { useState } from 'react';
import { useSpring, animated } from 'react-spring';


const LearnBasic = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const foldInStyle = useSpring({
        transform: isHovered ? 'perspective(600px) rotateY(-180deg)' : 'perspective(600px) rotateY(0deg)',
    });

    const foldOutStyle = useSpring({
        transform: isHovered ? 'perspective(600px) rotateY(0deg)' : 'perspective(600px) rotateY(-180deg)',
    });

    return (
        <>
            <h2 className="text-5xl font-bold mb-6 text-center">Learn Basic</h2>
            <div
                className="animation-card"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <animated.div className="card-image" style={foldInStyle}>
                    <img src="https://img.freepik.com/free-photo/b-w_1122-1880.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.2.1999469744.1683008976&semt=ais" alt="Photography Image" />
                </animated.div>
                <animated.div className="card-content" style={foldOutStyle}>
                    <div className='top-0'>
                        <h3 className="card-title">Street Photography</h3>
                        <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, rerum commodi voluptas ad temporibus praesentium reprehenderit quod animi quas illo excepturi, architecto nobis dolorem tenetur explicabo, quo molestiae necessitatibus. Obcaecati?</p>
                    </div>
                </animated.div>
            </div>

        </>
    );
};

export default LearnBasic;