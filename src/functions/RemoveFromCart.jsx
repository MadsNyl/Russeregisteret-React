import React from "react";

export function RemoveFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart"));

    const newCart = cart.storage.filter((item, i) => i !== index);

    localStorage.setItem("cart", JSON.stringify({ storage: newCart, size: newCart.size }));
}