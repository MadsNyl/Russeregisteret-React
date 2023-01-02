import React from "react";

export function AddToCart(item) {

    const c = JSON.parse(localStorage.getItem("cart"));

    if (c) {
        c.storage.push({name: item.name, year: item.year});
        localStorage.setItem("cart", JSON.stringify({ storage: c.storage, size: c.storage.length }));
    } else {
        let cartList = [];
        cartList.push({name: item.name, year: item.year});
        localStorage.setItem("cart", JSON.stringify({ storage: cartList, size: cartList.length }));
    }
}