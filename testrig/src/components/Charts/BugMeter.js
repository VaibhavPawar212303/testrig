import React, { useState } from "react";
import { RadialBarChart, RadialBar, Tooltip, Legend, PieChart } from "recharts";
import Piechart from "./Piechart";
const projectID = localStorage.getItem("projectID");
const selectedBuild = localStorage.getItem("Build");

function BugMeter() {
  const [build, setBuild] = useState("");

  fetch(
    `https://testrig.onrender.com/api/project/getreport/${projectID}/${selectedBuild}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setBuild(data);
    });

  const testPass = build.total_test_pass;
  const totalTest = build.total_test;
  const testFail = build.total_test_fail;
  const testParallel = build.total_test_parallel;
  const testAverage = testPass / totalTest;
  //data
  const data = [
    {
      name: "Total Test",
      tests: totalTest,
      fill: "#8884d8",
    },
    {
      name: "Test Pass",
      tests: testPass,
      fill: "green",
    },
    {
      name: "Test Fail",
      tests: testFail,
      fill: "red",
    },
    {
      name: "Test Parallel",
      tests: testParallel,
      fill: "blue",
    },
    {
      name: "Test Average",
      tests: testAverage,
      fill: "yellow",
    },
  ];

  return (
    <>
      <div>
        <h1 className="flex flex-col items-center mt-5 text-2xl">
          <a
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
            aria-current="page"
          >
            {build.build_name}
          </a>
        </h1>
        <hr />
      </div>
      <div className="ml-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg absolute mt-10 ml-12 w-44 h-40 flex flex-row items-center">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex flex-row items-center ml-4">
              Total Test
            </div>
            <p className="text-gray-700 flex flex-col items-center text-xl">
              {totalTest}
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg absolute mt-10 ml-60 w-52 h-40 flex flex-row items-center">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex flex-row items-center ml-4">
              Total Test Pass
            </div>
            <p className="text-green-700 flex flex-col items-center text-xl">
              {testPass}
            </p>
          </div>
        </div>
        <div className="ml-20">
          <div className="max-w-sm rounded overflow-hidden shadow-lg absolute mt-10 ml-96 w-50 h-40 flex flex-row items-center">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 flex flex-row items-center ml-2">
                Total Test Fail
              </div>
              <p className="text-red-700 flex flex-col items-center text-xl">
                {testFail}
              </p>
            </div>
          </div>
        </div>
        <div className="ml-72">
          <div className="max-w-sm rounded overflow-hidden shadow-lg absolute mt-10 ml-96 w-50 h-40 flex flex-row items-center">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 flex flex-row items-center ml-2">
                Parallel Execution Test
              </div>
              <p className="text-yellow-700 flex flex-col items-center text-xl">
                {testParallel}
              </p>
            </div>
          </div>
        </div>
        <div className="ml-72">
          <div className="ml-72">
            <div className="max-w-sm rounded overflow-hidden shadow-lg absolute mt-10 ml-96 w-50 h-40 flex flex-row items-center">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 flex flex-row items-center ml-2">
                  Test Average
                </div>
                <p className="text-blue-700 flex flex-col items-center text-xl">
                  {testAverage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute mt-64 ml-20 w-80">
        <h1 className="text-xl">Test Meter</h1>
        <div className="mt-10">
          <RadialBarChart
            width={570}
            height={240}
            innerRadius="40%"
            outerRadius="80%"
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              label={{ fill: "#666", position: "insideStart" }}
              background
              clockWise={true}
              dataKey="tests"
            />
            <Legend
              iconSize={10}
              width={130}
              height={200}
              layout="middle"
              verticalAlign="middle"
              align="center"
              iconType="triangle"
            />
            <Tooltip />
          </RadialBarChart>
        </div>
      </div>
      <div className="absolute mt-64 ml-96">
      <div className="ml-96">
      <Piechart/>
      </div>
      </div>
    </>
  );
}

export default BugMeter;
