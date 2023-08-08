import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";

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
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;