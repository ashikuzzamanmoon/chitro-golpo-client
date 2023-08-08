import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2sh3xv5', 'template_4ckdx9e', form.current, '88qR5saEOxs8Ghur-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='md:mt-28'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold my-5'>Get in Touch</h2>
                <div className='flex justify-center'>
                    <p className='w-1/2'>Contact me directly through the provided form or reach out via the provided contact details to discuss course inquiries, or any other questions you may have.</p>
                </div>
            </div>
            <div className='md:flex gap-20'>
                <div>
                    <img src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.2.1999469744.1683008976&semt=ais" alt="" />
                </div>
                <div className='md:mt-40'>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" className="input text-black outline-none ml-9 bg-slate-200" placeholder="Enter your name here" /> <br />
                        <label>Email</label>
                        <input type="email" name="user_email" className="input my-5 text-black outline-none ml-10 bg-slate-200" placeholder="Enter your email here" /> <br />
                        <label>Message</label>
                        <textarea name="message" className="input outline-none ml-4 text-black md:w-[430px] w-3/4 bg-slate-200" placeholder="Write details here" /> <br />
                        <input type="submit" value="Send" className='btn btn-info text-white w-1/5 my-6' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;