import React from "react";
import { PieChart, Pie, Tooltip, Legend } from "recharts";
const data02 = [
  {
    name: "total build stop",
    value: 500,
  },
];
const data01 = [
  {
    name: "total build run",
    value: 3400,
  },
];
const data03 = [
  {
    name: "Build stop due to error",
    value: 800,
  },
];

function PieCharts() {
  return (
    <>
      <div className="absolute grid grid-cols-1 mt-6 ml-72">
        <div className="col-start-2">
        <h1 className="ml-30 w-30 text-xl">Build Runner</h1>
          <PieChart  width={290} height={250}>
          
            <Tooltip />
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
            />
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Pie
              data={data03}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={30}
              fill="#8824d8"
            />
             <Legend />
          </PieChart>
        </div>
      </div>
    </>
  );
}

export default PieCharts;
