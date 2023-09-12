import React, { useState, useEffect } from 'react';

const itemsDetails = ({ item, onEdit, onDelete }) => {

    const {
        supcode,
        code,
        name,
        unit,
        quantity,
        total,
        TVA,
        TVA_value,
        TTC,
        place,
        addValueCost,
        unit_price,
        cost,
        revenue,
        purchase,
        expense,
        final_good,
        change_inv_acc,
        inventory_account,
        manager,
        image  // Note: Make sure to add 'image' in your 'item' state object in your 'AddItem' component
    } = item;

    // return (
    //     <div className="card">
    //         <img src={image} alt={name} />
    //         <div className="content">
    //             {/* Render all necessary item attributes */}
    //             <div>{`Supcode: ${supcode}`}</div>
    //             <div>{`Code: ${code}`}</div>
    //             <div>{`name: ${name}`}</div>
    //             <div>{`unit: ${unit}`}</div>
    //             {/* And so on for other attributes */}

    //             <div className="actions">
    //                 <button onClick={() => onEdit(item)}>Edit</button>
    //                 <button onClick={() => onDelete(item)}>Delete</button>
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <div className="pt-6 px-4 flex items-center justify-center">
            <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src={image} alt={name} />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Supcode: ${supcode}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Code: ${code}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Unit: ${unit}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Quantity: ${quantity}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Total: ${total}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`TVA: ${TVA}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`TVA Value: ${TVA_value}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`TTC Value: ${TTC}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Place: ${place}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Value Cost: ${addValueCost}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Unit Price: ${unit_price}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Cost: ${cost}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Revenue: ${revenue}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Purchase: ${purchase}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Expense: ${expense}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Final Good: ${final_good}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Change Inventory Account: ${change_inv_acc}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Inventory Account: ${inventory_account}`}</p>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">{`Manager: ${manager}`}</p>
                        <div className="flex mt-6">
                            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => onEdit(item)}>Edit</button>
                            <button className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg ml-4" onClick={() => onDelete(item)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default itemsDetails;
