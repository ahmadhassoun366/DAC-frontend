import React, { useState, useEffect } from 'react';
import { fetchItems, addItem } from './itemsAPI';

const SelectItemPage = ({shopId}) => {
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', description: '' });

    useEffect(() => {
        const allItems = fetchItems();
        setItems(allItems);
    }, []);

    useEffect(() => {
        const allSelectedItems = JSON.parse(localStorage.getItem("selectedItemsByShop") || "{}");
        setSelectedItems(allSelectedItems[shopId] || []);
    }, [shopId]);

    const handleSelect = (item) => {
        let allSelectedItems = JSON.parse(localStorage.getItem("selectedItemsByShop") || "{}");
        let currentSelectedItemsForShop = allSelectedItems[shopId] || [];
    
        if (!currentSelectedItemsForShop.some(i => i.id === item.id)) {
            currentSelectedItemsForShop.push(item);
            allSelectedItems[shopId] = currentSelectedItemsForShop;
            localStorage.setItem("selectedItemsByShop", JSON.stringify(allSelectedItems));
            setSelectedItems(currentSelectedItemsForShop);
        }
    };

    const handleNewItemChange = (event) => {
        setNewItem({ ...newItem, [event.target.name]: event.target.value });
    };

    const handleAddItem = () => {
        const addedItem = addItem(newItem);
        setItems([...items, addedItem]);
        setNewItem({ name: '', description: '' });
    };

    return (
        <div>
            <h1>Select an Item</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} 
                        <button onClick={() => handleSelect(item)}>Select</button>
                    </li>
                ))}
            </ul>
            <div>
                <h2>Selected Items:</h2>
                <ul>
                    {selectedItems.map(item => <li key={item.id}>{item.name}</li>)}
                </ul>
            </div>
            <div>
                <h2>Add New Item:</h2>
                <input 
                    name="name" 
                    value={newItem.name} 
                    onChange={handleNewItemChange} 
                    placeholder="Item Name"
                />
                <input 
                    name="description" 
                    value={newItem.description} 
                    onChange={handleNewItemChange} 
                    placeholder="Description"
                />
                <button onClick={handleAddItem}>Add</button>
            </div>
        </div>
    );
};

export default SelectItemPage;
