import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <section className='flex items-center h-screen p-16 text-gray-900'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    <div className='text-center'>
                        <img src="https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg?w=740&t=st=1686159484~exp=1686160084~hmac=7359cab2a6e8d33800e490c1b10dd6f5d39ac4b75c4c702bc2515b60ef4307a6" className='w-72 h-72' alt="" />
                    </div>
                    <div className='max-w-md text-center'>

                        <Link
                            to='/'
                            className='px-8 py-3 font-semibold rounded bg-info text-gray-900'
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