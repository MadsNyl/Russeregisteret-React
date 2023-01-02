import React from "react";
import { NavLink } from "react-router-dom";
import empty from "../img/empty.png";

export function EmptyCart() {
    return(
        <>
            <div className="flex justify-center">
                <div className="space-y-10 pb-12">
                    <img 
                        className="w-24 h-24 lg:w-32 lg:h-32 mx-auto "
                        src={empty} 
                        alt="Empty cart" 
                    />
                    <h1 className="text-gray-900 text-center text-xl font-medium">
                        Oi! Her var det tomt... Du må først registrere et navn.
                    </h1>
                </div>
            </div>
            <div className="flex justify-center">
                <NavLink
                    to={"/"}
                    className="py-3 rounded-md bg-red-400 border border-red-400 w-full text-white font-medium lg:text-lg text-center"
                >
                    Registrer
                </NavLink>
            </div>
        </>
    );
}