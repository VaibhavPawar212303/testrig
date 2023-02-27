import React, { useState } from "react";
const BuildId = localStorage.getItem("Build");

function RecentReport() {
  const [report, setReport] = useState("");
  //getReport
  fetch(`http://localhost:5000/api/project/getReport/${BuildId}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var result = data.result;
      console.log(result);
      setReport(result);
    });

  console.log(report);
  return <div>RecentReport</div>;
}

export default RecentReport;
