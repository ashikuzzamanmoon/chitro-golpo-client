import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const Payments = () => {
    const stripePromise=loadStripe("pk_test_51NI6SGKLVWcK2yt0ZzQIUv7lDd7Z8bKjj3pXxHbrIuKNDI0of0JtfGdzvGjslvi2PgQvi5EcnJA86oMB9NmtUyAx00W2NzXB5Z");

    const pay=useParams()
    console.log(pay)
    const info=useLoaderData();
    return (
        <div>
            <div className="w-full">
            <div className="text center">
                <h2 className="text-3xl text-center">Pay Now</h2>
                <div className="ps-50">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm></CheckOutForm>
                    </Elements>

                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Payments;