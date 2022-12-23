import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";
import { Cart } from "../pages/Cart";
import { Success } from "../pages/Success";


export function AnimatedRoutes() {
    const location = useLocation();

    return(
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/success' element={<Success />} />
            </Routes>
        </AnimatePresence>
    );
}