import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <section className='flex items-center h-screen p-16 text-gray-900'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    <div className='text-center'>
                        <img src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=740&t=st=1684608550~exp=1684609150~hmac=3299d44b3ee5b676741a19b3f4630d74649bd401cbc6b8de2069dacd4b7fccc6" className='w-72 h-72' alt="" />
                    </div>
                    <div className='max-w-md text-center'>

                        <Link
                            to='/'
                            className='px-8 py-3 font-semibold rounded bg-red-200 text-gray-900'
                        >
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;