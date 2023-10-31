import React from "react";

const Reports = () => {

  return (
    <div className="m-10 p-5 border rounded">
    {/* Title & Date */}
    <div className="flex justify-between mb-4">
      <div className="text-xl font-bold">Form No. 123</div>
      <div className="text-lg">Date: 01/08/2023</div>
    </div>

    {/* Main Table */}
    <table className="min-w-full border-t border-b">
      <thead>
        <tr>
          <th className="border px-4 py-2">Code</th>
          <th className="border px-4 py-2">Spec</th>
          <th className="border px-4 py-2">Designation</th>
          {/* Add other headers here */}
        </tr>
      </thead>
      <tbody>
        {/* Sample row */}
        <tr>
          <td className="border px-4 py-2">Value1</td>
          <td className="border px-4 py-2">Value2</td>
          <td className="border px-4 py-2">Value3</td>
          {/* Add other data columns here */}
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>

    {/* Footer */}
    <div className="flex justify-between mt-4">
      <div className="text-lg">Footer Text Left</div>
      <div className="text-lg">Footer Text Right</div>
    </div>
  </div>

  );
};

export default Reports;
