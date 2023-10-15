import React from "react";
import { Link } from "react-router-dom";
import money from "../../../../Assets/vat.png";



const Managment = () => {
    return (
        <div class="pt-6 px-4">
            <div class="flex justify-around p-10 gap-8">
                <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
                    <div class="flex justify-center md:justify-end -mt-16">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={money} alt="" />
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">TVA</h2>
                        <p class="mt-2 text-gray-600">Manage your company TVA, Add TVA ,Delete and edit  </p>
                        <Link to="./TVA" class="mt-4 bg-cyan-600 text-white px-6 py-2 rounded inline-flex items-center">Visit</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Managment;