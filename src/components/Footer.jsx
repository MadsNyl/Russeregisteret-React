import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { API_URL } from "../shared";

export function Footer() {

    const [isLoading, setLoading] = useState();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [msgError, setMsgError] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const send = async (e) => {
        setLoading(true);
        e.preventDefault();
        e.target.reset();

        if (name.length === 0) {
            setNameError(true);
            if (email.length === 0) {
                setEmailError(true);

                if (msg.length === 0) {
                    setMsgError(true);
                    setLoading(false);
                    return;
                } 

                return;
            } else {
                
                if (msg.length === 0) {
                    setMsgError(true);
                    setLoading(false);
                    return;
                }
            }

            return;
        } else {

            if (email.length === 0) {
                setEmailError(true);
                if (msg.length === 0) {
                    setMsgError(true);
                    setLoading(false);
                    return;
                }

                return;
            } else {
                
                if (msg.length === 0) {
                    setLoading(false);
                    setMsgError(true);
                    return;
                } 
            }
        }

        const body = {
            name: name,
            email: email,
            message: msg
        }

        let res = await fetch(API_URL + "contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        const result = res.body;

        setLoading(false);
    }

    return (
        <div className="px-12 pt-12 pb-16 bg-white flex justify-around space-x-20 items-end">
            <form 
                className="max-w-xl w-full text-gray-900"
                onSubmit={send}
            >
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
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            type="text"
                            className={"focus:outline-none w-full px-4 py-2 text-gray-900 bg-white rounded-md " + (nameError ? "placeholder:text-red-600 border border-red-600" : "placeholder:text-gray-400 border border-gray-300")} 
                            placeholder={nameError ? "Fyll inn navn" : ""}
                        />
                    </div>
                    <div className="w-full space-y-2">
                        <h1 className="text-lg font-medium text-gray-600">
                            Din epost
                        </h1>
                        <input 
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type="email"
                            className={"focus:outline-none w-full px-4 py-2 text-gray-900 bg-white rounded-md " + (emailError ? "placeholder:text-red-600 border border-red-600" : "placeholder:text-gray-400 border border-gray-300")} 
                            placeholder={nameError ? "Fyll inn epost" : ""}
                        />
                    </div>
                </div>
                
                <div className="w-full pb-3">
                    <textarea 
                        onChange={(e) => {
                            setMsg(e.target.value);
                        }}
                        className={"resize-none focus:outline-none w-full px-4 py-2 text-gray-900 bg-white h-32 rounded-md " + (msgError ? "placeholder:text-red-600 border border-red-600" : "placeholder:text-gray-400 border border-gray-300")}
                        placeholder={nameError ? "Fyll inn melding" : "Din melding til oss..."}
                    />
                </div>

                <div className="w-full">
                    <button 
                        disabled={isLoading ? true : false}
                        className={"w-full py-2 rounded-md text-white text-lg font-medium flex justify-center items-center " + (isLoading ? "bg-gray-300" : "bg-black ") }
                    >
                        {
                            !isLoading 
                                ? "Send melding"
                                : <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                        }
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