import React, { useState, useEffect } from "react";

const EditsubUnit = (props) => {
  const [unitName, setUnitName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [subUnit, setSubUnit] = useState("");
  const [operation, setOperation] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    // When component mounts, populate state with props data
    if (props.unitDetails) {
      setUnitName(props.unitDetails.name);
      setSymbol(props.unitDetails.unit_symbol);
      setSubUnit(props.unitDetails.sub_unit);
      setOperation(props.unitDetails.operation);
      setAmount(props.unitDetails.amount);
    }
  }, [props.unitDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: unitName,
      unit_symbol: symbol,
      sub_unit: subUnit,
      operation,
      amount,
    };

    try {
      // Adjust the API endpoint and method for editing
      const response = await fetch(
        `http://127.0.0.1:8000/api/subunit/${props.unitDetails.id}/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Edited:", data);
        props.UpdateSettingUnits();
        props.loseModal();
        // Additional success actions (e.g., updating UI, navigating, etc.)
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("There was an error editing the unit", error);
    }
  };

  return (
    <div className="py-6 px-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Subunit</h2>
        <form onSubmit={handleSubmit}>
          {/* Unit Name */}
          <div className="mb-4">
            <label
              htmlFor="unitName"
              className="block text-gray-700 font-medium mb-2"
            >
              Subunit Name
            </label>
            <input
              type="text"
              id="unitName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              placeholder={unitName}
              value={unitName}
              onChange={(e) => setUnitName(e.target.value)}
              required
            />
          </div>
          {/* Amount */}
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-gray-700 font-medium mb-2"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          {/* Operation */}
          <div className="mb-4">
            <label
              htmlFor="operation"
              className="block text-gray-700 font-medium mb-2"
            >
              Operation
            </label>
            <select
              id="operation"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              required
            >
              <option value="" disabled>
                Select operation
              </option>
              <option value="+">Addition (+)</option>
              <option value="-">Subtraction (-)</option>
              <option value="*">Multiplication (*)</option>
              <option value="/">Division (/)</option>
            </select>
          </div>
          {/* Symbol */}
          <div className="mb-4">
            <label
              htmlFor="symbol"
              className="block text-gray-700 font-medium mb-2"
            >
              Symbol
            </label>
            <input
              type="text"
              id="symbol"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              placeholder="Enter symbol"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              required
            />
          </div>
          {/* Sub Unit */}
          <div className="mb-4">
            <label
              htmlFor="subUnit"
              className="block text-gray-700 font-medium mb-2"
            >
              Sub Unit
            </label>
            <select
              id="subUnit"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              value={subUnit}
              onChange={(e) => setSubUnit(e.target.value)}
              required
            >
              <option value="" disabled>
                Select sub unit
              </option>
              <option value="1">Sub Unit 1</option>
              <option value="2">Sub Unit 2</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-300"
          >
            Save Changes
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            className="text-black-500 hover:underline"
            onClick={() => props.loseModal()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditsubUnit;
