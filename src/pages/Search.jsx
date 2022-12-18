import React from "react";
import { Animated } from "./Animated";

export function Search() {

    const search = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    return(
        <Animated>
            <div className="flex justify-center mt-12 pb-12">
                <form 
                    onSubmit={search}
                    className="max-w-3xl w-full px-4 py-2 flex justify-between items-center bg-white rounded-lg shadow-md"
                >
                    <input
                        className="focus:outline-none w-full py-1 text-lg text-gray-900 placeholder:text-gray-400 font-semibold border-r border-r-gray-400" 
                        type="text" 
                        placeholder="Søk etter navn..."
                    />
                    <button className="flex justify-center items-center text-gray-400 transition duration-150 ease-in-out hover:text-gray-900 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </form>
            </div>

            <div className="flex justify-center">
                <div className="max-w-3xl w-full px-8 py-6 bg-white rounded-md shadow-md">
                    <div className="flex justify-between items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>

                        <div>
                            <h1>
                                Antall treff: 14
                            </h1>
                        </div>

                        <div>
                            <h1>
                                Side: 1
                            </h1>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </Animated>
    );
}