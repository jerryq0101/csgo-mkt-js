import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import 'tailwindcss/tailwind.css';

const Dashboard = ({ dailyData }) => {
  const chartData = dailyData.map((data, index) => ({
    name: `Day ${index + 1}`,
    volume: data,
  }));

  return (
    <div className="p-20">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="volume"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>

        <div className="col-span-1">
          <div className="mb-4">
            <h3 className="font-bold">Volume per day in the past week</h3>
            {/* Replace values below with actual data */}
            <p>1000</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Current Steam Price</h3>
            {/* Replace values below with actual data */}
            <p>$50</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Sentiment</h3>
            {/* Replace values below with actual data */}
            <p>Positive</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;