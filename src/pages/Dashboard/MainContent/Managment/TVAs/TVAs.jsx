import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Addunit from "../Units/Addunit";
// import Editunit from "../Units/Editunit";
import { toast } from "react-toastify";
import axios from "axios";

const TVAs = () => {
  const [units, setUnits] = useState([]);
  const [ setIsLoading] = useState(true);
  const [ setError] = useState(null);
  const [ setEditingUnit] = useState(null);
  const [setIsAddModalOpen] = useState(false);
  const [setIsEditModalOpen] = useState(false);

  const history = useNavigate();

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };


  const openEditModal = (unit) => {
    setEditingUnit(unit);
    setIsEditModalOpen(true);
  };




  useEffect(() => {
    fetchUnits();
  });

  const fetchUnits = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/tva");
      setUnits(response.data);
      console.log("response", response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching the units:", error);
      setError(error);
      setIsLoading(false);
    }
  };
 
  const handleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/unit/${id}/delete`)
      .then((response) => {
        setUnits(units.filter((unit) => unit.id !== id));
        toast.success("Successfully deleted!");
        history("/dashboard/accounting/units");
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
          + Add TVA
        </button>
      </div>
      <div className="mx-10 mt-4 mr-10">
        <table className="w-full bg-white border rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="border px-4 py-2">TVA Name</th>
              <th className="border px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* I assume itemDetails is an array. If it's a single object, remove the map */}
            {units.map((unit) => (
              <tr className="hover:bg-gray-100" key={unit.id}>
                <td className="border px-4 py-2">{unit.name}</td>
                <td className="border px-4 py-2">{unit.amount}</td>
                {/* ... other data cells */}
                <td className="border px-4 py-2 flex justify-center items-center">
                  <button
                    onClick={() => handleDelete(unit.id)}
                    className="bg-gray-900 text-white px-5 py-1 rounded mr-1"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => openEditModal(unit)}
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

      {/* <div
        className={`fixed inset-0 z-50 ${isAddModalOpen ? "" : "hidden"}`}
        style={{ top: "auto", left: "60%" }}
      >
        <Addunit closeModal={closeAddModal} UpdateSettingUnits={UpdateSettingUnits} />
      </div>

      <div
        className={`fixed inset-0 z-50 ${isEditModalOpen ? "" : "hidden"}`}
        style={{ top: "auto", left: "60%" }}
      >
        <Editunit unitDetails={editingUnit} loseModal={closeEditModal} UpdateSettingUnits={UpdateSettingUnits} />
      </div> */}
    </div>
  );
};
export default TVAs;
