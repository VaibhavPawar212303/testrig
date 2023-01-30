import React from "react";
import Bars from "../Charts/Bar";
import Integration from "../Integration/Integration";
import Navbar from "../Navbar/Navbar";
import PieCharts from "../Charts/PieCharts";
import RadialpieChart from "../Charts/RadialpieChart";
import Timeline from "../Timeline/Timeline";
import AreaChart from "../Charts/AreaChart";
import Footer from "../Footer/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />
      <PieCharts />
      <RadialpieChart />
      <Bars />
      {/* <Integration /> */}
      <Timeline />
      <AreaChart/>
      <Footer/>
    </>
  );
}

export default Dashboard;
