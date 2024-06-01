import React from "react";
import Sidebar from "../../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: "20px" }}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
