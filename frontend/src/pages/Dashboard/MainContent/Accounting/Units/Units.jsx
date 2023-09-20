import React from "react";
import { Link } from "react-router-dom";


const Units = () => {
    return (
        <div class="pt-6 px-4">
            <div className="flex justify-end items-center mr-10">
                <Link
                    to="./addunit"
                    className="mt-4 bg-gray-900 text-white px-2 py-2 rounded inline-flex items-center"
                >
                    + Add Unit
                </Link>
            </div>
        </div>
    )
}
export default Units;
