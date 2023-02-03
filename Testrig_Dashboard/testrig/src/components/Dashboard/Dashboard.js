import React from "react";
import Bars from "../Charts/Bar";
import Integration from "../Integration/Integration";
import Navbar from "../Navbar/Navbar";
import PieCharts from "../Charts/PieCharts";
import RadialpieChart from "../Charts/RadialpieChart";
import Timeline from "../Timeline/Timeline";
import AreaChart from "../Charts/AreaChart";
import Footer from "../Footer/Footer";
import { BrowserRouter } from "react-router-dom";
// const cores = require('cors');
// fetch("https://06f6-49-248-198-70.in.ngrok.io/tasks", { mode: "cors" })
//   .then((response) => {
//     console.log(response.json());
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function Dashboard() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <PieCharts />
        <RadialpieChart />
        <Bars />
        {/* <Integration /> */}
        <Timeline />
        <AreaChart />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Dashboard;
