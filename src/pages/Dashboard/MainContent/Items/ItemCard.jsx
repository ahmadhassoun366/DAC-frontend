import React from "react";
import "tailwindcss/tailwind.css";

const ItemCard = ({ itemDetails, onDelete, onUpdate, onView }) => {
  return (
    <tr className="hover:bg-gray-100" >
      <td className="border px-4 py-2">{itemDetails.supcode}</td>
      <td className="border px-4 py-2">{itemDetails.code}</td>
      <td className="border px-4 py-2">{itemDetails.name}</td>
      <td className="border px-4 py-2">{itemDetails.unit}</td>
      <td className="border px-4 py-2">{itemDetails.quantity}</td>
      <td className="border px-4 py-2">{itemDetails.total}</td>

      <td className="border px-4 py-2 flex justify-center items-center">
        <button
          className="bg-gray-900 text-white px-5 py-1 rounded mr-1"
          onClick={() => onView(itemDetails.id)}
        >
          More Detials
        </button>
        {/* <button
          className="bg-blue-500 text-white px-2 py-1 rounded mr-1"
          onClick={() => onUpdate(itemDetails.id)}
        >
          Update
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => onDelete(itemDetails.id)}
        >
          Delete
        </button> */}
      </td>
    </tr>
  );
};
export default ItemCard;
