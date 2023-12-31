import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const CheckOutForm = ({info,myCartId}) => 
{
    const { price, name, imag, seat, classId, enrolledStudents } = info || {};
    const [cardError, setCardError] = useState('');
    const { user } = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const token = localStorage.getItem('token');
    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        if (price > 0) {
            axios.post('https://assignment-12-server-side-ivory.vercel.app/create-payment-intent', { price }, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, token])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setProcessing(true)


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );


        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)


            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                classId,
                myCartId,
                name,
                imag,
                price,
                seat,
                enrolledStudents
            }

            axios.post('https://assignment-12-server-side-ivory.vercel.app/payments', payment)
                .then(data => {
                    // console.log(data)
                    if (data.data.insertResult.insertedId) {

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'successfully payment',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

    }

    return (
        <div className="w-full p-16">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                 disabled={!stripe || !clientSecret || processing}

                    className=" btn btn-primary mt-5" type="submit" >
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Payment success  transactionId:{transactionId}</p>}
        </div>
    );
};

export default CheckOutForm;