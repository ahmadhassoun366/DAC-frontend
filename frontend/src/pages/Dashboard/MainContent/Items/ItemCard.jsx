import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const ItemCard = ({ itemDetails }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src={itemDetails.image} alt={itemDetails.title} />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{itemDetails.title}</div>
                    <p className="mt-2 text-gray-500">{itemDetails.description}</p>
                </div>
            </div>
        </div>
    );
};
export default ItemCard;
