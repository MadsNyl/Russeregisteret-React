import React from "react";
import { InfoBox } from "../components/InfoBox";
import { Animated } from "./Animated";
import upload from "../img/up-arrow.png";
import group from "../img/teamwork.png";
import price from "../img/discount.png";
import look from "../img/look.png";
import stripe from "../img/stripe.svg";
import { NavLink } from "react-router-dom";

export function Home() {
    const info = [
        { 
            logo: look, 
            title: "søk",
            text: "Søk i våre registre. Både for inspirasjon og for å se hva som har vært i bruk og når."
        },
        { 
            logo: upload, 
            title: "registrer",
            text: "Last opp ett eller flere navn som dere ønsker å vise resten av russeverden at skal bli tatt i bruk. Dere forblir så klart helt anonyme."
        },
        { 
            logo: group, 
            title: "pris",
            text: "Det er nå 3029 russenavn registrert i vårt register."
        },
        { 
            logo: price, 
            title: "pris",
            text: "For å forhindre masseopplasting av navn (for å holde av flest mulige navn) så har vi satt på en liten prissperre på 59 kr."
        },
    ];

    return (
        <Animated>
            <div className="flex justify-center mt-20 pb-24">
                <div className="lg:max-w-5xl lg:ml-20 text-center">
                    <h1 className="font-medium text-3xl lg:text-6xl leading-tight pb-8">
                        En enkel, rask og effektiv måte å reservere gruppenavnet
                    </h1>
                    <div className="flex justify-center pb-12">
                        <p className="text-center lg:text-lg lg:max-w-lg text-sky-900">
                            Finn ut om ideene deres er i bruk, og forhindre at andre tar i bruk samme navn som dere
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 place-items-center px-36 gap-y-8 pb-32">
                {
                    info.map(item => {
                        return <InfoBox key={item.logo} logo={item.logo} text={item.text} />
                    })
                }
            </div>

            <div className="bg-white px-32 py-16 rounded-xl mb-20">
                <div className="pb-16 flex justify-between">  
                    <div className="max-w-md">
                        <h1 className="text-red-400 text-5xl font-semibold pb-6">
                            Registrer navn
                        </h1>
                        <p className="text-lg text-gray-900">
                            Hos oss betaler dere trygt med <a className="text-blue-800 font-medium" href="https://stripe.com/en-no">Stripe</a>, en sikker leverandør for betaling over nett.
                        </p>
                    </div>
                    <img 
                        src={stripe} 
                        alt="Stripe logo" 
                        className="w-52 h-52"
                    />
                </div>

                <div className="flex justify-between py-8">
                    <form className="max-w-md w-full text-gray-900">
                        <div className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 flex justify-between">
                            <input
                                className="w-full focus:outline-none font-medium" 
                                type="text" 
                                placeholder="Gruppenavn"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                            </svg>
                        </div>

                        <div className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 flex justify-between mt-3">
                            <input
                                className="w-full focus:outline-none font-medium" 
                                type="text" 
                                placeholder="Russekull"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <div className="flex justify-center mt-5">
                            <button className="py-3 rounded-md bg-red-400 w-full text-white font-medium text-lg">
                                Sjekk opp mot register
                            </button>
                        </div>
                    </form>

                    <div className="max-w-md w-full h-54 text-gray-900">
                        <div className="w-full bg-white border border-gray-300 rounded-md px-4 py-3">
                            <h1 className="text-lg font-semibold pb-4">
                                Liknende navn
                            </h1>
                            <p className="pb-2">
                                Det ble funnet 11 liknende navn i vårt register. Dette liknet mest:
                            </p>
                            <p>
                                Søk i vårt register for flere detaljer.
                            </p>
                        </div>

                        <div className="flex justify-center space-x-8 mt-5">
                            <NavLink
                                to={"/search"} 
                                className="py-3 rounded-md bg-white border border-gray-300 w-full text-gray-900 font-medium text-lg text-center"
                            >
                                Søk
                            </NavLink>
                            <button className="py-3 rounded-md bg-red-400 border border-red-400 w-full text-white font-medium text-lg">
                                Registrer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Animated>
    );
}