import React from "react";
import { NavLink } from "react-router-dom";

export function Footer() {
    return (
        <div className="px-12 pt-12 pb-16 bg-white flex justify-around space-x-6 items-end">
            <form className="max-w-xl w-full text-gray-900">
                <div className="pb-8">
                    <h1 className="text-4xl font-bold">
                        Kontakt oss
                    </h1>
                </div>
                <div className="flex items-center space-x-8 pb-6">
                    <div className="w-full space-y-2">
                        <h1 className="text-lg font-medium text-gray-600">
                            Ditt navn
                        </h1>
                        <input 
                            type="text"
                            className="focus:outline-none w-full px-4 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 bg-white rounded-md" 
                        />
                    </div>
                    <div className="w-full space-y-2">
                        <h1 className="text-lg font-medium text-gray-600">
                            Din epost
                        </h1>
                        <input 
                            type="email"
                            className="focus:outline-none w-full px-4 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 bg-white rounded-md" 
                        />
                    </div>
                </div>
                
                <div className="w-full pb-3">
                    <textarea 
                        className="w-full resize-none focus:outline-none px-4 py-2 text-gray-900 placeholder:text-gray-400 bg-white rounded-md border border-gray-300 h-32"
                        placeholder="Din melding til oss..."
                    />
                </div>

                <div className="w-full">
                    <button className="w-full py-2 rounded-md bg-black text-white text-lg font-medium">
                        Send epost
                    </button>
                </div>
            </form>

            <div className="max-w-md w-full">
                <div className="text-gray-900">
                    <h1 className="pb-6">
                        <span className="font-semibold text-lg">Kontakt:</span> kundeservice@russeregisteret.no 
                    </h1>

                    <NavLink
                        to={"/"}
                        className="text-xl md:text-2xl lg:text-4xl font-semibold"
                    >
                        <span className="text-red-400">Russe</span>registeret
                    </NavLink>

                    <h1 className="font-semibold text-gray-500 mt-3">
                        Laget av NylHolth DA
                    </h1>
                </div>
            </div>
        </div>
    );
}