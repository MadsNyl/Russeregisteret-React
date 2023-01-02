import React from "react";
import { NavLink } from "react-router-dom";

export function ItemAddedMessage(props) {
    return (
        <div className="w-full py-3 lg:py-5 px-6 bg-emerald-400 text-white lg:text-lg rounded-lg flex justify-between items-center">
            <h1>
                "{props.item.name} {props.item.year}" er lagt til i din <NavLink to={"/cart"} className="underline font-semibold">handlekurv</NavLink>. 
            </h1>
            <button
                className="flex justify-center items-center"
                onClick={() => {
                    props.removeItem()
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}