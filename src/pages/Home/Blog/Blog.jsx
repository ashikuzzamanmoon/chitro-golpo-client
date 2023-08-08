import { Link } from "react-router-dom";


const Blog = () => {
    return (
        <div className="mt-20 flex">
            <div className="w-4/5">
                <img className="w-4/5" src="https://img.freepik.com/free-photo/photographer-hand-holding-camera-standing-viewpoint-clouds-panorama-viewpoint-sunrise_335224-1320.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.2.1999469744.1683008976&semt=sph" alt="" />
                <div className="relative bottom-20 left-16 border bg-white p-9 w-2/3 -mb-24">
                    <h2 className="font-bold text-5xl">5 Reasons You Should Fall In Love With Photography</h2>
                    <Link to="/blogs"><button className="btn btn-link">Learn More</button></Link>
                </div>
            </div>
            <div className="-ml-24 w-80">
                <h2 className="font-bold text-4xl text-info">About us</h2>
                <h2 className="text-2xl text-info">Chitro Golpo</h2>
                <p>Chitro Golpo is a photography-related website for summer camp that provides a fun and educational experience for young photographers. Campers will learn the basics of photography, from how to use a camera to how to edit photos. They will also have the opportunity to explore their creativity and take pictures of the world around them. Chitro Golpo is the perfect way for young photographers to learn new skills, make friends, and have a great time.</p>
                <h2 className="font-bold text-4xl text-info mb-6 mt-8">Follow us on</h2>
                <div className="flex gap-5">
                    <img className="w-14" src="https://i.ibb.co/tpj4653/facebook.png" alt="" />
                    <img className="w-14" src="https://i.ibb.co/hVmq3Xn/youtube.png" alt="" />
                    <img className="w-14" src="https://i.ibb.co/N3vwY0S/twitter.png" alt="" />
                    <img className="w-14" src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.2.1999469744.1683008976&semt=ais" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blog;