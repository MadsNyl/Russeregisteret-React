import React from "react";

export function RemoveFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart"));

    localStorage.setItem("cart", JSON.stringify(cart.filter((item, i) => i !== index)));
}