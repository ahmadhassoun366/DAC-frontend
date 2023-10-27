import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Addsubunit from "./Addsubunit"
import EditsubUnit from "./Editsubunit";
import { toast } from "react-toastify";
import axios from "axios";

const Subunits = () => {
    const [subunits, setsubunits] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingUnit, setEditingUnit] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const history = useNavigate();

    const openAddModal = () => {
        setIsAddModalOpen(true);
    };

    const closeAddModal = () => {
        setIsAddModalOpen(false);
    };

    const openEditModal = (unit) => {
        setEditingUnit(unit);
        setIsEditModalOpen(true);
    };



    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setEditingUnit(null); // optional, in case you want to clear out the editing unit
    };

    useEffect(() => {
        fetchUnits();

    }, []);

    const fetchUnits = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/subunit");
            setsubunits(response.data);
            console.log("response", response.data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching the units:", error);
            setError(error);
            setIsLoading(false);
        }
    };
    const UpdateSettingUnits = () => {
        fetchUnits();

    }
    const handleDelete = (id) => {
        axios
            .delete(`http://127.0.0.1:8000/api/subunit/${id}/delete`)
            .then((response) => {
                setsubunits(subunits.filter((unit) => unit.id !== id));
                toast.success("Successfully deleted!");
                history("/dashboard/accounting/subunits");
            })
            .catch((error) => {
                console.error(`There was a problem with the delete request: ${error}`);
            });
    };



    return (
        <div className="pt-6 px-4">
            <div className="flex justify-end items-center mr-10">
                <button
                    onClick={openAddModal}
                    className="mt-4 bg-gray-900 text-white px-2 py-2 rounded inline-flex items-center"
                >
                    + Add Unit
                </button>
            </div>
            <div className="mx-10 mt-4 mr-10">
                <table className="w-full bg-white border rounded-lg shadow-lg">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Unit Name</th>
                            <th className="border px-4 py-2">Symbol</th>
                            {/* ... other headers */}
                            <th className="border px-4 py-2">Sub Unit</th>
                            <th className="border px-4 py-2">Operation</th>
                            <th className="border px-4 py-2">Amount</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* I assume itemDetails is an array. If it's a single object, remove the map */}
                        {subunits.map((subunit) => (
                            <tr className="hover:bg-gray-100" key={subunit.id}>
                                <td className="border px-4 py-2">{subunit.name}</td>
                                <td className="border px-4 py-2">{subunit.unit_symbol}</td>
                                <td className="border px-4 py-2">{subunit.sub_unit}</td>
                                <td className="border px-4 py-2">{subunit.operation}</td>
                                <td className="border px-4 py-2">{subunit.amount}</td>
                                {/* ... other data cells */}
                                <td className="border px-4 py-2 flex justify-center items-center">
                                    <button
                                        onClick={() => handleDelete(subunit.id)}
                                        className="bg-gray-900 text-white px-5 py-1 rounded mr-1"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => openEditModal(subunit)}
                                        className="bg-gray-900 text-white px-5 py-1 rounded mr-1"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div
                className={`fixed inset-0 z-50 ${isAddModalOpen ? "" : "hidden"}`}
                style={{ top: "auto", left: "60%" }}
            >
                <Addsubunit closeModal={closeAddModal} UpdateSettingUnits={UpdateSettingUnits} />
            </div>

            <div
                className={`fixed inset-0 z-50 ${isEditModalOpen ? "" : "hidden"}`}
                style={{ top: "auto", left: "60%" }}
            >
                <EditsubUnit unitDetails={editingUnit} loseModal={closeEditModal} UpdateSettingUnits={UpdateSettingUnits} />
            </div>
        </div>
    );
};
export default Subunits;
