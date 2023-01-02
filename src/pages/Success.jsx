import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_URL } from "../shared";
import { Animated } from "./Animated";
import launch from "../img/launch.png";
import { CartContext } from "../components/Nav";

export function Success() {
    const [sessionParam] = useSearchParams();
    const [isLoading, setLoading] = useState();
    const [session, setSession] = useState();
    const [error, setError] = useState();
    const [cart, setCart] = useContext(CartContext);

    const navigator = useNavigate();
    const sessionId = sessionParam.get("session_id");

    const getSession = async () => {
        setLoading(true);

        if (!sessionId) {
            navigator("/");
        }

        const res = await fetch(API_URL + `session?session=${sessionId}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        });

        if (res.status === 400) {
            navigator("/");
            return;
        }

        const result = await res.json();
        
        const data = [];
        for (const r of result.data) {
            data.push(r.description);
        }

        setSession(data);
        setCart();
        setLoading(false);
    }   

    useEffect(() => {
        getSession();
    }, []);

    return(
        <Animated >
            {
                !isLoading && session
                ? <div className="flex justify-center mt-12 text-gray-900 pb-20">
                    <div className="bg-white px-12 py-6 rounded-md shadow-md max-w-xl w-full">
                        <div className="flex justify-center pb-6">
                            <img 
                                className="w-32 h-32"
                                src={launch} 
                                alt="Kjøp fullført" 
                            />
                        </div>
                        <div className="flex justify-center text-center pb-8">
                            <div className="space-y-4">
                                <h1 className="text-2xl font-semibold">
                                    { session.length > 1 
                                        ? "Gratulerer, dine navn er registrert" 
                                        : "Gratulerer, ditt navn er registrert"}
                                </h1>
                                <p className="">
                                    Du har nå blitt tilsendt en bekrefetelse på epost. Se i spam/søppelpost hvis du ikke har fått mail.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center pb-12">
                            <div>
                                <p className="pb-3">
                                    Følgende navn har blitt registrert:
                                </p>

                                {
                                    session.map(item => {
                                        return <p className="font-medium">
                                            - {item}
                                        </p>
                                    })
                                }
                            </div>
                        </div>

                        <div className="text-gray-400">
                            <p className="font-medium text-sm">
                                Id: <span className="text-xs">{sessionId}</span>
                            </p>
                        </div>
                    </div>
                </div>
                : <div></div>
            }
        </Animated>
    );
}