import React, { useState } from "react";
import { InfoBox } from "../components/InfoBox";
import { Animated } from "./Animated";
import upload from "../img/up-arrow.png";
import group from "../img/teamwork.png";
import price from "../img/discount.png";
import look from "../img/look.png";
import stripe from "../img/stripe.svg";
import { NavLink } from "react-router-dom";
import { API_URL } from "../shared";
import { Output } from "../components/Output";
import { NoOutput } from "../components/NoOutput";
import { ItemAddedMessage } from "../components/ItemAddedMessage";

export function Home() {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [total, setTotal] = useState(0);
    const [data, setData] = useState();
    const [isRender, setRender] = useState(true);
    const [search, setSearch] = useState();
    const [isAdded, setAdded] = useState();
    const [isLoading, setLoading] = useState();
    const [nameError, setNameError] = useState(false);
    const [yearError, setYearError] = useState(false);

    const resetStates = () => {
        setLoading(true);
        setNameError(false);
        setYearError(false);
        setSearch({
            name: name,
            year: year
        })
        setName("");
        setYear("");
        setData();
    }

    const check = async (e) => {
        e.preventDefault();
        e.target.reset();
        resetStates();

        // input validating
        if (name.length < 2) {
            setNameError(true);
            
            if (year.length !== 4 || !parseInt(year)) {
                setYearError(true);
            }

            setLoading(false);
            return;
        } else if (name.length >= 2) {
            setNameError(false);

            if (year.length !== 4 || !parseInt(year)) {
                setYearError(true);

                setLoading(false);
                return;
            }
        }

        // search for name
        let res = await fetch(API_URL + `check?search=${name}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        });

        const result = await res.json();

        if (result[0].result.length === 0) {
            setTotal(0);
            setRender(false);
            setLoading(false);
            return;
        }

        setData({
            name: result[0].result[0].name,
            year: result[0].result[0].year
        });


        setTotal(result[0].total);
        setRender(false);
        setLoading(false);
    }

    const addItem = () => {
        setAdded(true);

        setTimeout(() => {
            setAdded(false);
        }, 5000)
    }

    const removeItem = () => {
        setAdded(false);
    }

    const removeOutput = () => {
        setRender(true);
    }
 
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

                <div className="flex justify-between py-8 pb-16">
                    <form 
                        onSubmit={check}
                        className="max-w-md w-full text-gray-900"
                    >
                        <div className={"w-full bg-white border rounded-md px-4 py-3 flex justify-between mt-3 " + (nameError ? "border-red-500" : "border-gray-300")}>
                            <input
                                onChange={(e) => { setName(e.target.value); }}
                                className={"w-full focus:outline-none font-medium " + (nameError ? "placeholder:text-red-600" : "")}  
                                type="text" 
                                placeholder={ !nameError ? "Gruppenavn" : "Gruppenavn må være minst 2 bokstaver"}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={"w-6 h-6 " + (nameError ? "text-red-600" : "")}>
                                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                            </svg>
                        </div>

                        <div className={"w-full bg-white border rounded-md px-4 py-3 flex justify-between mt-3 " + (yearError ? "border-red-500" : "border-gray-300")}>
                            <input
                                onChange={(e) => { setYear(e.target.value); }}
                                className={"w-full focus:outline-none font-medium " + (yearError ? "placeholder:text-red-600" : "")} 
                                type="text" 
                                placeholder={ !yearError ? "Russekull" : "Russekull må være et tall med 4 sifre"}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={"w-6 h-6 " + (yearError ? "text-red-600" : "")}>
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <div className="flex justify-center mt-5">
                            <button 
                                disabled={ name.length === 0 || year.length === 0 ? true : false }
                                className={"py-3 w-full rounded-md font-medium text-lg flex justify-center " + (name.length === 0 || year.length === 0 ? "bg-gray-200 text-gray-400" : "bg-red-400 text-white")}
                            >
                                { !isLoading 
                                    ? "Sjekk opp mot register" 
                                    : <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>}
                            </button>
                        </div>
                    </form>

                    {
                        !isLoading && !isRender
                        ? (
                            data
                            ? <Output total={total} data={data} search={search} addItem={addItem} removeOutput={removeOutput} />
                            : <NoOutput search={search} addItem={addItem} removeOutput={removeOutput} />
                        )
                        : <div className="h-54" />
                    }
                </div>

                <div className="h-20 pb-12">
                    {
                        isAdded
                        ? <ItemAddedMessage item={search} removeItem={removeItem}/>
                        : <div />
                    }
                </div>
            </div>
        </Animated>
    );
}