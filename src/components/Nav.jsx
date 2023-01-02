import React, { createContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Footer } from "./Footer";

export const CartContext = createContext();

export function Nav(props) {

    const [cart, setCart] = useState();

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem("cart"));
        if (storage) {
            if (storage.length > 0) setCart(storage);
        }
    }, []);


    return(
        <CartContext.Provider value={[cart, setCart]}>
            <div className="font-sans bg-gradient-to-br from-sky-300 via-indigo-400 to-sky-300 text-white relative overflow-x-hidden">
                <header className="flex justify-between items-center py-6 max-w-7xl mx-auto">
                    <div className="ml-6 md:ml-16 lg:ml-20">
                        <NavLink
                            to={"/"}
                            className="text-xl md:text-2xl lg:text-4xl font-semibold"
                        >
                            <span className="text-red-400">Russe</span>registeret
                        </NavLink>
                    </div>
                    <nav className="mr-6 md:mr-16 lg:mr-20 flex items-center space-x-8">
                        <NavLink
                            to={"/search"}
                            className="uppercase text-sky-900 font-medium transition duration-150 ease-out hover:text-white"
                        >
                            søk
                        </NavLink>
                        <NavLink
                            to={"/cart"}
                        >
                            <div className="relative group">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={1.5} stroke="currentColor" 
                                    className="w-8 h-8 transition duration-150 ease-in-out text-sky-900 group-hover:text-white"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <div className="absolute -bottom-2 -right-1 w-5 h-5 rounded-full bg-sky-900 flex justify-center items-center text-gray-300 text-xs transition duration-150 ease-in-out group-hover:text-sky-900 group-hover:bg-white">
                                    <p>
                                        { cart ? cart.length : 0 }
                                    </p>
                                </div>
                            </div>
                        </NavLink>
                    </nav>
                </header>

                <div className="max-w-7xl mx-auto min-h-screen">
                    { props.children }
                </div>

                <div className="max-w-7xl mx-auto">
                    <Footer />
                </div>
            </div>
        </CartContext.Provider>
    );
}