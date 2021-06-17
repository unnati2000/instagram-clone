import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Timeline from "../../components/timeline/timeline";
import Sidebar from "../../components/sidebar/sidebar";
import "./dashboard.css";

const Dashboard = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <Header />
      <div className="grid">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
