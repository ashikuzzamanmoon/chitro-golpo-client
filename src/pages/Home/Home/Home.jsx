import Banner from "../Banner/Banner";

import Instructors from "../Instructors/Instructors";
import LearnBasic from "../LearnBasic/LearnBasic";
import TopClasses from "../TopClasses/TopClasses";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
              <TopClasses></TopClasses>
            <Instructors></Instructors>
            <LearnBasic></LearnBasic>
        </div>
    );
};

export default Home;