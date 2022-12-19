import React from "react";

export function AddToCart(item) {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
        cart.push({name: item.name, year: item.year});
        localStorage.setItem("cart", JSON.stringify(cart));
    } else {
        let cartList = [];
        cartList.push({name: item.name, year: item.year});
        localStorage.setItem("cart", JSON.stringify(cartList));
    }
}