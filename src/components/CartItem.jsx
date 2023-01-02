import React from "react";
import { RemoveFromCart } from "../functions/RemoveFromCart";

export function CartItem(props) {
    return (
        <div className="w-full flex justify-between items-center py-4 px-3 lg:px-6 bg-gray-100 border border-gray-200 text-gray-900 rounded-md">
            <div className="flex items-center space-x-2 lg:text-lg font-semibold">
                <h1>
                    { props.item.name }
                </h1>
                <h1>
                    { props.item.year }
                </h1>
            </div>
            <button 
                onClick={() => {
                    props.removeItem(props.cart, props.index);
                    RemoveFromCart(props.index);
                }}
                className="flex justify-center items-center transition duration-150 ease-in-out hover:text-gray-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}