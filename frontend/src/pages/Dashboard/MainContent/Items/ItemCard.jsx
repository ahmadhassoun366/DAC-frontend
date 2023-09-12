import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const ItemCard = ({ itemDetails }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
            <div className="md:flex">
                <Link className="md:flex-shrink-0" to="itemdetails">
                    <img className="h-48 w-full object-cover md:w-48" src={itemDetails.image} alt={itemDetails.name} />
                </Link>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">name: {itemDetails.name}</div>
                    <p className="mt-2 text-gray-500">quantity: {itemDetails.quantity}</p>
                    <p className="mt-2 text-gray-500">inventory account: {itemDetails.inventory_acc}</p>
                </div>
            </div>
        </div>
    );
};
export default ItemCard;
