import { React, useState } from "react";
import { Link } from "react-router-dom";
import Addunit from "../Units/Addunit";

const Units = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div class="pt-6 px-4">
            <div className="flex justify-end items-center mr-10">
                <button
                    // to="./addunit"
                    onClick={() => openModal()}
                    className="mt-4 bg-gray-900 text-white px-2 py-2 rounded inline-flex items-center"
                >
                    + Add Unit
                </button>
            </div>
            <div className="mx-10 mt-4 mr-10 ">
                <table className="w-full bg-white border rounded-lg shadow-lg">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">unitName</th>
                            <th className="border px-4 py-2">symbol</th>
                            <th className="border px-4 py-2">subUnit</th>
                            <th className="border px-4 py-2">operation</th>
                            <th className="border px-4 py-2">amount</th>

                            {/* Add more column headers as needed */}
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-100" >
                            <td className="border px-4 py-2">itemDetails.unitName</td>
                            <td className="border px-4 py-2">itemDetails.symbol</td>
                            <td className="border px-4 py-2">itemDetails.subUnit</td>
                            <td className="border px-4 py-2">itemDetails.operation</td>
                            <td className="border px-4 py-2">itemDetails.amount</td>
                            <td className="border px-4 py-2 flex justify-center items-center">
                                <button
                                    className="bg-gray-900 text-white px-5 py-1 rounded mr-1"
                                >
                                    Delete
                                </button>
                                <button
                                    className="bg-gray-900 text-white px-5 py-1 rounded mr-1"
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'hidden'}`} style={{ top: "auto", left: "60%" }}>
                <Addunit closeModal={closeModal} />
            </div>


        </div >
    )
}
export default Units;
