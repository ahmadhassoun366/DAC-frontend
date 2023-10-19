// itemsAPI.js

let items = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3' },
    { id: 4, name: 'Item 4', description: 'Description for Item 4' },
    // ... add more items as needed
];

export const fetchItems = () => {
    return items;
};

export const fetchItemById = (id) => {
    return items.find(item => item.id === id);
};

export const addItem = (item) => {
    // Assuming ID is auto-incremented. Adjust as needed.
    const newItem = {
        ...item,
        id: items.length + 1
    };
    items.push(newItem);
    return newItem; // return the new item with its new ID
};
