import React from "react";
import { Animated } from "../pages/Animated";
import empty from "../img/empty.png";
import { NavLink } from "react-router-dom";

export function Cart() {
    

    return (
        <Animated>
            <div className="flex justify-center mt-16">
                <div className="max-w-3xl w-full px-12 py-8 rounded-md shadow-md bg-white">
                    <div className="flex justify-center">
                        <div className="space-y-10 pb-12">
                            <img 
                                className="w-32 h-32 mx-auto "
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
                            className="py-3 rounded-md bg-red-400 border border-red-400 w-full text-white font-medium text-lg text-center"
                        >
                            Registrer
                        </NavLink>
                    </div>
                </div>
            </div>
        </Animated>
    );
}