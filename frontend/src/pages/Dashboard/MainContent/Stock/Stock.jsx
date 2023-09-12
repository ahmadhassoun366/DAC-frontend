import React from "react";
import { Link } from "react-router-dom";
import van from "../../../../Assets/van.png";
import shop from "../../../../Assets/store.png"
import storepng from "../../../../Assets/department.png"
const Stock = () => {
    return (
        <div class="pt-6 px-4">


            <div class="flex justify-around p-10 gap-8">
                <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
                    <div class="flex justify-center md:justify-end -mt-16">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={storepng} />
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">Store</h2>
                        <p class="mt-2 text-gray-600">Manage your inventory, categorize products, track sales and more</p>
                        <Link to='items' class="mt-4 bg-cyan-600 text-white px-2 py-2 rounded inline-flex items-center">Visit</Link>
                    </div>
                </div>
                <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
                    <div class="flex justify-center md:justify-end -mt-16">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={shop} />
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">Shop</h2>
                        <p class="mt-2 text-gray-600">Your personal digital storefront to sell products directly to customers</p>
                        <button class="mt-4 bg-cyan-600 text-white px-2 py-2 rounded inline-flex items-center">Visit</button>
                    </div>
                </div>
                <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
                    <div class="flex justify-center md:justify-end -mt-16">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={van} />
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">Distributor Vehicles</h2>
                        <p class="mt-2 text-gray-600">Track deliveries and manage logistics for your business operations</p>
                        <button class="mt-4  text-white px-2 py-2 rounded inline-flex items-center bg-cyan-600">Visit</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Stock;
