import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from "recharts";


const data = [
  {
    name: "Build 1",
    testcases_pass: 4000,
    testcases_fail: 2000,
  },
  {
    name: "Build 2",
    testcases_pass: 2000,
    testcases_fail: 2400,
  },
  {
    name: "Build 3",
    testcases_pass: 4000,
    testcases_fail: 2800,
  },
  {
    name: "Build 4",
    testcases_pass: 3000,
    testcases_fail: 2400,
  },
  {
    name: "Build 5",
    testcases_pass: 5000,
    testcases_fail: 2400,
  },
  {
    name: "Build 1",
    testcases_pass: 4000,
    testcases_fail: 2400,
  },
];

function Bars() {
  return (
    <>
      <div className="absolute mt-96 ml-70 grid grid-cols-2 w-8/12 mb-3">
        <div className="col-start-1 ml-72">
          <h1 className="w-30 text-xl mb-5">TestCases Report</h1>
          <BarChart width={830} height={350} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="testcases_pass" />
            <Tooltip />
            <Legend />
            <Bar dataKey="testcases_pass" fill="#8884d8" />
            <Bar dataKey="testcases_fail" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </>
  );
}

export default Bars;
