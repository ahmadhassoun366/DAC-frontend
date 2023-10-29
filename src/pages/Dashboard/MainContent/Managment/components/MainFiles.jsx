import React, { useState } from 'react';

const MainFiles = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 25;

    const mockupData = Array.from({ length: 100 }).map((_, index) => {
        const fileTypes = ["PDF", "Excel", "PowerPoint", "Word", "Image", "Audio", "Video"];
        const randomType = fileTypes[Math.floor(Math.random() * fileTypes.length)];

        const randomSize = (Math.random() * (10 - 0.5) + 0.5).toFixed(2); 

        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 100)); 
        const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

        return {
            fileName: `File-${index + 1}.${randomType === 'Excel' ? 'xls' : randomType === 'PowerPoint' ? 'ppt' : randomType === 'Word' ? 'docx' : 'file'}`,
            dateModified: formattedDate,
            size: `${randomSize}MB`,
            type: randomType
        };
    });

    const filteredFiles = mockupData.filter(file =>
        file.fileName.toLowerCase().includes(searchTerm.toLowerCase())
    );


    // Calculations for pagination
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentFiles = filteredFiles.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(filteredFiles.length / itemsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    const goToFirstPage = () => setCurrentPage(1);
    const goToLastPage = () => setCurrentPage(totalPages);

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-6">Main Files</h2>

            <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search files..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border rounded-md p-2"
                    />
                    <button className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600">Upload File</button>
                </div>

                <div className="flex gap-2">
                    <button className="text-blue-500">Sort by Name</button>
                    <button className="text-blue-500">Sort by Date</button>
                </div>
            </div>

            <table className="min-w-full bg-white border rounded-md">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 border">File</th>
                        <th className="px-4 py-2 border">Date Modified</th>
                        <th className="px-4 py-2 border">Size</th>
                        <th className="px-4 py-2 border">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {currentFiles.map((file, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-2 border flex items-center gap-2">
                                <div className="w-6 h-6 bg-gray-200"></div>
                                {file.fileName}
                            </td>
                            <td className="px-4 py-2 border">{file.dateModified}</td>
                            <td className="px-4 py-2 border">{file.size}</td>
                            <td className="px-4 py-2 border">{file.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

             <div className="mt-4 flex justify-center">
            <button onClick={goToFirstPage} className="px-3 py-1 border rounded-md mx-1">First</button>
            <button onClick={goToPrevPage} className="px-3 py-1 border rounded-md mx-1">Prev</button>
            <span className="px-3 py-1 border rounded-md mx-1 bg-blue-500 text-white">{currentPage}</span>
            <button onClick={goToNextPage} className="px-3 py-1 border rounded-md mx-1">Next</button>
            <button onClick={goToLastPage} className="px-3 py-1 border rounded-md mx-1">Last</button>
        </div>
        </div>
    );
}

export default MainFiles;
