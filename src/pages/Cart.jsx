import React, { useEffect, useState } from "react";
import { Animated } from "../pages/Animated";
import { NavLink } from "react-router-dom";
import { EmptyCart } from "../components/EmptyCart";
import { CartItem } from "../components/CartItem";
import { API_URL } from "../shared";

export function Cart() {
    
    const [cart, setCart] = useState();
    const [isLoading, setLoading] = useState();
 
    const checkOut = async () => {
        setLoading(true);

        let res = await fetch(API_URL + "create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cart)
        });

        const result = await res.json();

        window.location = result.url;

        setLoading(false);
    }

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem("cart"));
        if (storage) {
            if (storage.length > 0) setCart(storage);
        }
    }, []);

    const removeItem = (cart, index) => {
        if (cart.length - 1 === 0) {
            setCart();
            return;
        }

        setCart(cart.filter((item, i) => i !== index));
    }

    return (
        <Animated>
            <div className="flex justify-center mt-16 pb-24">
                <div className="max-w-3xl w-full px-12 py-8 rounded-md shadow-md bg-white">
                    {
                        cart
                        ? <div>
                            <div className="text-red-400 pb-8 text-3xl font-semibold">
                                <h1>
                                    Mine gruppenavn
                                </h1>
                            </div>
                            <div className="space-y-4 pb-5">
                            {cart.map((item, index) => {
                                return <CartItem key={index} item={item} index={index} cart={cart} removeItem={removeItem}/>
                            })}
                            </div>
                            <div className="flex justify-center items-center text-center space-x-6">
                                <NavLink
                                    to={"/"} 
                                    className="w-full py-3 bg-indigo-500 text-white text-lg font-semibold rounded-md"
                                >
                                    Legg til navn
                                </NavLink>

                                <button
                                    onClick={checkOut} 
                                    className="w-full py-3 bg-red-400 text-white text-lg font-semibold rounded-md flex justify-center items-center"
                                >
                                    {!isLoading 
                                    ? "Gå til betaling" 
                                    : <svg aria-hidden="true" className="w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>}
                                </button>
                            </div>
                        </div>
                        : <EmptyCart />
                    }
                </div>
            </div>
        </Animated>
    );
}