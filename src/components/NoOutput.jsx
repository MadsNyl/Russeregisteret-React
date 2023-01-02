import React from "react";
import { AddToCart } from "../functions/AddToCart";

export function NoOutput(props) {
    return(
        <div className="max-w-md w-full h-54 text-gray-900 mt-6 lg:mt-0">
            <div className="w-full bg-white border border-gray-300 rounded-md px-4 py-3">
                <h1 className="text-lg font-semibold pb-4">
                    Liknende navn til <span className="capitalize">{props.search.name}</span> {props.search.year}
                </h1>
                <p className="pb-2">
                    Det ble funnet ingen liknende navn i vårt register.
                </p>
                <p>
                    Trykk på knappen under for å legge til ditt gruppenavn i handlekurven.
                </p>
            </div>

            <div className="mt-5">
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