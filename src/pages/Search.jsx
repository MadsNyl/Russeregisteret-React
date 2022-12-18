import React, { useEffect, useRef, useState } from "react";
import { NameListing } from "../components/NameListing";
import { API_URL } from "../shared";
import { Animated } from "./Animated";

export function Search() {

    const [search, setSearch] = useState("");
    const [data, setData] = useState();
    const [error, setError] = useState({
        invalidInput: false,
        notFound: false
    });
    const [isLoading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState();
    const limit = 10;

    const searchData = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError({
            invalidInput: false,
            notFound: false
        });
        setData();


        if (search.length < 2) {
            setError({
                invalidInput: true,
                notFound: false
            });
            setLoading(false);
            return;
        }

        await getData(1);

        console.log(data)

        setLoading(false);
    }

    const prevPage = () => {
        if (page === 1) return;
        setLoading(true);

        getData(page - 1);

        setLoading(false);
    }

    const nextPage = async () => {
        setLoading(true);

        if (data.length < limit || data.length * page >= total) {
            setLoading(false);
            return;
        }

        getData(page + 1);

        setLoading(false);
    }

    const getData = async (page) => {
        setPage(page);
        let res = await fetch(API_URL + `search?search=${search}&page=${page}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        });
        const result = await res.json();

        if (result[0].names.length === 0) {
            setError({
                invalidInput: false,
                notFound: true
            });
            setLoading(false);
            return;
        }

        const names = [];
        for (let r of result[0].names) {
            names.push({
                name: r.name,
                year: r.year
            });
        }

        setData(names);
        setTotal(result[0].total);
    }

    return(
        <Animated>
            <div className="flex justify-center mt-12 pb-12">
                <form 
                    onSubmit={searchData}
                    className={"max-w-3xl w-full px-4 py-2 flex justify-between items-center bg-white rounded-lg shadow-md border-2 " + (error.invalidInput ? "border-red-800" : "border-white")}
                >
                    <input
                        className={"focus:outline-none w-full py-1 text-lg text-gray-900 placeholder:text-gray-400 font-semibold border-r border-r-gray-400 " + (error.invalidInput ? "placeholder:text-red-700" : "")}
                        type="text" 
                        placeholder={error.invalidInput ? "Søk må være minst to bokstaver..." : "Søk etter navn..."}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <button className="flex justify-center items-center text-gray-400 transition duration-150 ease-in-out hover:text-gray-900 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </form>
            </div>

            <div className="flex justify-center pb-32">
                {
                    !isLoading && data
                        ? (
                            <div className="max-w-3xl w-full px-8 py-6 bg-white rounded-md shadow-md">
                                <div className="flex justify-between items-center text-gray-600 pb-5 border-b border-b-gray-300">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className={(page === 1 ? "text-gray-200" : "cursor-pointer transition duration-150 ease-in-out hover:text-gray-200") + " w-6 h-6"}
                                        onClick={prevPage}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>

                                    <div>
                                        <h1>
                                            Antall treff: {total}
                                        </h1>
                                    </div>

                                    <div>
                                        <h1>
                                            Side: {page}
                                        </h1>
                                    </div>

                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className={(data.length < limit || data.length * page >= total ? "text-gray-200" : "cursor-pointer transition duration-150 ease-in-out hover:text-gray-200") + " w-6 h-6"}
                                        onClick={nextPage}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>

                                {data.map(item => {
                                    return <NameListing key={item.name + item.year} name={item.name} year={item.year} />
                                })}
                            </div>
                        )   
                        : (
                            error.notFound
                            ? (
                                <div className="max-w-xl w-full mx-auto mt-8">
                                    <div className="flex justify-center pb-8">

                                    </div>
                                    <div className="flex justify-center">
                                        <h1 className="font-semibold text-3xl text-center">
                                            Vi kunne ikke finne søket ditt... Prøv noe annet
                                        </h1>
                                    </div>
                                </div>
                            )
                            : <></>       
                        )
                }
            </div>
        </Animated>
    );
}