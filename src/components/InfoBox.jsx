import React from "react";
import upload from "../img/up-arrow.png";
import group from "../img/teamwork.png";
import price from "../img/discount.png";
import look from "../img/look.png";

export function InfoBox() {
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
            text: "Det er nå over 3000 russenavn registrert i vårt register."
        },
        { 
            logo: price, 
            title: "pris",
            text: "For å forhindre masseopplasting av navn (for å holde av flest mulige navn) så har vi satt opp en liten prissperre på 59 kr."
        },
    ];

    return (
        <>
            {info.map((item, index) => {
                return <div key={index} className="max-w-sm w-full bg-white px-8 py-7 rounded-md shadow-md h-56 border border-gray-100">
                    <div className="flex justify-center pb-6">
                        <img 
                            className="w-12 h-12 lg:w-16 lg:h-16"
                            src={item.logo} 
                            alt="logo" 
                        />
                    </div>
                    <div className="flex justify-center text-gray-900 text-sm lg:text-md">
                        <p>
                            {item.text}
                        </p>
                    </div>
                </div>
            })}
        </>
    );
}