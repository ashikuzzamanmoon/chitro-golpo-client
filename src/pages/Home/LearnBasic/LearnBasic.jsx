import { useEffect } from "react";
import { useState } from "react";


const LearnBasic = () => {
    const [animation, setAnimation] = useState('');

    useEffect(() => {
      const interval = setInterval(() => {
        setAnimation(prevAnimation => {
          return prevAnimation === '' ? '|' : prevAnimation === '|' ? '/' : prevAnimation === '/' ? '-' : '\\';
        });
      }, 300);
  
      return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h2 className="text-5xl font-bold mb-6 text-center">Learn Basic</h2>
            <div>
                <pre>{animation}</pre>
            </div>

        </>
    );
};

export default LearnBasic;