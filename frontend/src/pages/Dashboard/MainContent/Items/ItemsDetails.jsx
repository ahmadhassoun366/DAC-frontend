import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemsDetails = ({ item, onEdit, onDelete }) => {
    const [isEditing, setisEditing] = useState(false);
    const [items, setItems] = useState([]);
    const UpdateDetails = (item) => {
        setisEditing(true);
        onEdit(item);
    }
    const history = useNavigate();
  
    const handleDelete = (id) => {
        // Start deletion process, you may want to set some loading state here
        console.log(`Deleting item with id: ${id}`);
      
        // Make a DELETE request to your API endpoint
        fetch(`http://127.0.0.1:8000/api/item/${id}/delete`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            // You may want to remove the item from the local state here
            setItems(items.filter((item) => item.id !== id));
            history('/dashboard/stock/items');
          })
          .catch((error) => {
            // Handle errors
            console.error(`There was a problem with the delete request: ${error}`);
          });
      };
    

    const details = [
        { id: 1, label: 'Supcode', value: item.supcode },
        { id: 2, label: 'Code', value: item.code },
        { id: 3, label: 'Unit', value: item.unit },
        { id: 4, label: 'Quantity', value: item.quantity },
        { id: 5, label: 'Total', value: item.total },
        { id: 6, label: 'TVA', value: item.TVA },
        { id: 7, label: 'TVA Value', value: item.TVA_value },
        { id: 8, label: 'TTC Value', value: item.TTC },
        { id: 9, label: 'Place', value: item.place },
        { id: 10, label: 'Value Cost', value: item.addValueCost },
        { id: 11, label: 'Unit Price', value: item.unit_price },
        { id: 12, label: 'Cost', value: item.cost },
        { id: 13, label: 'Revenue', value: item.revenue },
        { id: 14, label: 'Purchase', value: item.purchase },
        { id: 15, label: 'Expense', value: item.expense },
        { id: 16, label: 'Final Good', value: item.final_good },
        { id: 17, label: 'Change Inventory Acc', value: item.change_inv_acc },
        { id: 18, label: 'Inventory Account', value: item.inventory_account },
        // { id: 19, label: 'Manager', value: item.manager },
        { id: 20, label: 'Image', value: item.image }
    ];

    return (

        <div className="w-full max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:flex md:items-stretch md:h-auto">
            <div className="md:flex-shrink-0 md:w-48 md:h-full md:flex md:items-center md:justify-center p-8">
                <img className="rounded-full w-full h-full object-cover" alt={item.id} />
            </div>

            <div className="flex-1 px-6 py-4 md:px-12">
                <h2 className="text-xl leading-tight mb-2 text-gray-800 font-bold uppercase">{item.name}</h2>

                <div className="flex items-center md:justify-between mt-2 mb-6 px-6 py-4 text-sm relative bg-indigo-100 rounded-md text-indigo-500">
                    Click {isEditing ? 'update' : 'edit'} to change different types of information.
                </div>

                <div className="w-full">
                    <ul className='flex border-b'>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-cyan-700">
                                Details
                            </a>
                        </li>
                    </ul>

                    <div className="py-6">
                        <div className="flex flex-wrap -mx-4 lg:-mx-8">
                            {details.map(detail => (
                                <div key={detail.id} className="my-1 px-4 w-full md:w-6/12 xl:w-4/12">
                                    <div className="shadow-sm border border-gray-200 p-6 rounded-lg">
                                        <div className="text-lg text-gray-900 font-semibold pb-2">{detail.label}</div>
                                        {isEditing ? (
                                            <input className="w-full px-5 py-3 text-gray-700 bg-gray-200 rounded border-none focus:outline-none" type="text" defaultValue={detail.value} />
                                        ) : (
                                            <h1 className="text-xl text-gray-700 font-bold">{detail.value}</h1>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center pb-3">
                        {isEditing ?
                            (
                                <button className="mr-4 bg-cyan-700 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Update
                                </button>
                            ) :
                            <button onClick={() => UpdateDetails(item)} className="mr-4 bg-cyan-700 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Edit
                            </button>
                        }
                        <button onClick={() => handleDelete(item.id)} className="mr-4 bg-black hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ItemsDetails;