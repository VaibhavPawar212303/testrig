import React, { useState } from "react";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const projectID = localStorage.getItem("projectID");
const selectedBuild = localStorage.getItem("Build");

function PieCharts() {
  const [build, setBuild] = useState("");

  fetch(
    `http://localhost:5000/api/project/getreport/${projectID}/${selectedBuild}`,
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

  return (
    <>
      <div>
        <h1 className="flex flex-col items-center mt-5 text-2xl">
          <a
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
            aria-current="page"
          >
            {build.build_name}
          </a>
        </h1>
        <hr />
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg absolute mt-10 ml-10">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Total Test</div>
          <p class="text-gray-700 text-base flex flex-col items-center">
            {build.total_test}
          </p>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg absolute mt-10 ml-52">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Total Test Pass</div>
          <p class="text-green-700 text-base flex flex-col items-center">
            {build.total_test_pass}
          </p>
        </div>
      </div>
      <div className="ml-10">
        <div class="max-w-sm rounded overflow-hidden shadow-lg absolute mt-10 ml-96">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Total Test Fail</div>
            <p class="text-red-700 text-base flex flex-col items-center">
              {build.total_test_fail}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PieCharts;
