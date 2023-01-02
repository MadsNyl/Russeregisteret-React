import React from "react";

export function AddToCart(item, cart, setCart) {

    const c = JSON.parse(localStorage.getItem("cart"));

    if (c) {
        c.push({name: item.name, year: item.year});
        localStorage.setItem("cart", JSON.stringify(c));
    } else {
        let cartList = [];
        cartList.push({name: item.name, year: item.year});
        localStorage.setItem("cart", JSON.stringify(cartList));
    }
}