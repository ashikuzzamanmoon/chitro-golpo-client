import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const CheckOutForm = () => {
    const stripe=useStripe()
    const elements=useElements();
    const{user}=useContext(AuthContext)
    const[cartError,setCartError]=useState("")
    const[clientSecret,setClientsecret]=useState("")
    const[transacTionId,setTransactionId]=useState("")
    const[processing,setProcessing]=useState(false)
    const token=localStorage.getItem('token')

    useEffect(()=>{
        axios.post('http://localhost:5000/create-payment-intent',
        {price},
        {
            headers:{
                authorization:`bearer${token}`,
            },
        }
        )
        .then((res)=>{
            console.log(res.data.clientSecret);
        });
    },[price,token]);

    const handleSubmit=async(event)=>{
        event.preventDefault();

        if(!stripe||!elements){
            return;
        }
        const card=elements.getElement(CardElement);
        if(card===null){
            return;
        }
        const{error}=await stripe.createPaymentMethod({
            type:"card",
            card
        });

        if(error){
            setCartError(error.message)
            console.log("error",error)
        }
        else{
            setCartError("")
        }
        setProcessing(true)
        const{
            paymentIntent,
            error:confirmError,
        } =await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    email:user?.email || "unknown",
                    name:user?.displayName || "annonymous",
                },
            },
        });

        if(confirmError){
            console.log(confirmError);
        }
        console.log(paymentIntent);
        setProcessing(false)
        if(paymentIntent.status==="succeeded"){
            setTransactionId(paymentIntent.id);

            const payment={
                cartId:_id,
                name:name,
                email:user?.email,
                transactionId:paymentIntent.id
            };

            axios.post("http://localhost:5000/payments",payment,{
                headers:{
                    authorization:`bearer${token}`,
                },
            })
            .then((data)=>{
                console.log(data)
                if(data.data.insertResult.insertedId)
                Swal.fire({
                    position:"center",
                    icon:"success",
                    title:`done`,
                    showConfirmButton:false,
                    timer:1500,
                })
            })
        }
    }

    return (
        <>
        <form className="w-2/3 m-8" onSubmit={handleSubmit}>
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
            <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
        {cartError && <p className="text-red-600 ml-8">{cartError}</p>}
        {transacTionId && <p className="text-green-500">Transaction complete with transactionId: {transacTionId}</p>}
    </>
    );
};

export default CheckOutForm;