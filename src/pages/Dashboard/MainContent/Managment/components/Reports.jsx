import React from "react";

const Reports = () => {

  return (
    <main>
      <h2 className="text-2xl font-bold mb-4">Reports Dashboard</h2>
      <div className="p-6  shadow-md rounded-md space-y-6 grid grid-cols-2 bg-gray-900 text-white">
        {/* Bar Chart Mockup */}
        <div className="mb-6 ">
          <h3 className="mb-4 text-lg font-medium">Monthly Sales</h3>
          <svg width="100%" height="200">
            <rect x="10" y="50" width="30" height="150" fill="#1E3A8A" />
            <rect x="50" y="100" width="30" height="100" fill="#3B82F6" />
            <rect x="90" y="120" width="30" height="80" fill="#9333EA" />
            {/* ... Add more bars as needed */}
          </svg>
        </div>

        {/* Line Chart Mockup */}
        <div className="mb-6 ">
          <h3 className="mb-4 text-lg font-medium">Yearly Growth</h3>
          <svg width="100%" height="200">
            <polyline
              points="10,150 50,100 90,120 130,70"
              stroke="#DC2626"
              strokeWidth="3"
              fill="none"
            />
            {/* ... Add more points or lines as needed */}
          </svg>
        </div>

        {/* Pie Chart Mockup */}
        <div className="mb-6 ">
          <h3 className="mb-4 text-lg font-medium">Product Categories</h3>
          <svg width="200" height="200">
            <circle cx="100" cy="100" r="90" fill="#1E3A8A" />
            <circle cx="100" cy="100" r="60" fill="#ffffff" />
            <text x="80" y="105" fill="#1E3A8A">
              70%
            </text>
          </svg>
        </div>

        {/* Donut Chart Mockup */}
        <div className="mb-6 ">
          <h3 className="mb-4 text-lg font-medium">User Activities</h3>
          <svg width="200" height="200">
            <circle cx="100" cy="100" r="90" fill="#1E3A8A" />
            <circle cx="100" cy="100" r="70" fill="#ffffff" />
            <text x="85" y="105" fill="#1E3A8A">
              30%
            </text>
          </svg>
        </div>

        {/* Add more visualizations as needed */}
      </div>
    </main>
  );
};

export default Reports;
