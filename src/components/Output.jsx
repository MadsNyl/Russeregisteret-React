import React from "react";
import { NavLink } from "react-router-dom";
import { AddToCart } from "../functions/AddToCart";

export function Output(props) {
    return(
        <div className="max-w-md w-full h-54 text-gray-900 lg:mt-0 mt-6">
            <div className="w-full bg-white border border-gray-300 rounded-md px-4 py-3">
                <h1 className="text-lg font-semibold pb-4">
                    Liknende navn til <span className="capitalize">{props.search.name}</span> {props.search.year}
                </h1>
                <p className="pb-2">
                    Det ble funnet {props.total} liknende navn i vårt register. Dette liknet mest: <span className="font-semibold">{props.data.name} {props.data.year}</span>
                </p>
                <p>
                    Søk i vårt register for flere detaljer, eller legg til i din handlekurv.
                </p>
            </div>

            <div className="flex justify-center space-x-4 lg:space-x-8 mt-5">
                <NavLink
                    to={"/search"} 
                    className="py-3 rounded-md bg-white border border-gray-300 w-full text-gray-900 font-medium lg:text-lg text-center"
                >
                    Søk
                </NavLink>
                <button 
                    onClick={() => {
                        AddToCart(props.search);
                        props.addItem();
                        props.removeOutput();
                    }}
                    className="py-3 rounded-md bg-red-400 border border-red-400 w-full text-white font-medium lg:text-lg"
                >
                    Legg til navn
                </button>
            </div>
        </div>
    );
}