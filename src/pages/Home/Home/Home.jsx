import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";
import LearnBasic from "../LearnBasic/LearnBasic";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Classes></Classes>
            <Instructors></Instructors>
            <LearnBasic></LearnBasic>
        </div>
    );
};

export default Home;