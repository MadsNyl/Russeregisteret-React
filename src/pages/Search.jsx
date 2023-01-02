import React, { useState } from "react";
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
    const [swapPage, setSwapPage] = useState();
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
        setSwapPage(true);

        getData(page - 1);

        setSwapPage(false);
        setLoading(false);
    }

    const nextPage = async () => {
        setLoading(true);
        setSwapPage(true);

        if (data.length < limit || data.length * page >= total) {
            setLoading(false);
            return;
        }

        getData(page + 1);

        setSwapPage(false);
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
                    className={"max-w-xs md:max-w-xl lg:max-w-3xl w-full px-4 py-2 flex justify-between items-center bg-white rounded-lg shadow-md border-2 " + (error.invalidInput ? "border-red-800" : "border-white")}
                >
                    <input
                        className={"focus:outline-none w-full py-1 placeholder:text-sm lg:placeholder:text-lg lg:text-lg text-gray-900 placeholder:text-gray-400 font-semibold border-r border-r-gray-400 " + (error.invalidInput ? "placeholder:text-red-700" : "")}
                        type="text" 
                        placeholder={error.invalidInput ? "Søk må være minst to bokstaver..." : "Søk etter navn..."}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <button className="flex justify-center items-center text-gray-400 transition duration-150 ease-in-out hover:text-gray-900 px-2 lg:px-4">
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
                            <div className="max-w-xs md:max-w-xl lg:max-w-3xl w-full px-8 py-6 bg-white rounded-md shadow-md">
                                <div className="flex justify-between items-center text-gray-600 pb-5 border-b border-b-gray-300">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className={(page === 1 ? "text-gray-200" : "cursor-pointer transition duration-150 ease-in-out lg:hover:text-gray-200") + " md:w-6 w-5 h-5 md:h-6"}
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
                                        className={(data.length < limit || data.length * page >= total ? "text-gray-200" : "cursor-pointer transition duration-150 ease-in-out lg:hover:text-gray-200") + " md:w-6 w-5 h-5 md:h-6"}
                                        onClick={nextPage}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>

                                {
                                    !swapPage
                                    ?
                                    data.map(item => {
                                        return <NameListing key={item.name + item.year} name={item.name} year={item.year} />
                                    })
                                    : 
                                    <div>
                                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                    </div>
                                }
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