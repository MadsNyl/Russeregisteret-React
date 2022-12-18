import React from "react";

export function InfoBox(props) {
    return (
        <div className="max-w-sm w-full bg-white px-8 py-7 rounded-md shadow-md h-56 border border-indigo-400">
            <div className="flex justify-center pb-6">
                <img 
                    className="w-16 h-16"
                    src={props.logo} 
                    alt="logo" 
                />
            </div>
            <div className="flex justify-center text-gray-900">
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    );
}