import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <img className="h-20 bg-gray-800" src="https://i.ibb.co/WgQQyCt/logo.png" alt="" />
                            <h3 className="text-white text-lg font-bold mb-4">ChitroGolpo</h3>
                            <p className="text-gray-400">Your one-stop shop for all your toy needs!</p>
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
                            <p className="text-gray-400">123 Main Street</p>
                            <p className="text-gray-400">City: State 12345</p>
                            <p className="text-gray-400">Phone: (123) 456-7890</p>
                            <p className="text-gray-400">Email: info@chitrogolpo.com</p>
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">Address</h3>
                            <p className="text-gray-400">123 Main Street</p>
                            <p className="text-gray-400">Framgate,1203</p>
                            <p className="text-gray-400">Dhaka, Bangladesh</p>
                            <p className="text-gray-400">Email: info@chitrogolpo.com</p>
                        </div>
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
                            <div className="text-gray-400">
                                <ul className="">
                                    <div className='flex items-center gap-1'>
                                        <li><a href="#"> <span> <AiFillFacebook></AiFillFacebook> </span> </a></li>
                                        <p>Facebook</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <li><a href="#"> <span> <AiFillTwitterSquare></AiFillTwitterSquare> </span> </a></li>
                                        <p>Twitter</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <li><a href="#"> <span> <AiFillInstagram></AiFillInstagram> </span> </a></li>
                                        <p>Instagram</p>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-700 my-8" />
                    <p className="text-center text-gray-400">
                        &copy; {new Date().getFullYear()} ChitroGolpo. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;