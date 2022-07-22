import { IconDashboard } from "components/icons";
import React from "react";

const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
];

const DashboardSidebar = () => {
  return (
    <div
      className="w-full md:w-[76px] rounded-3xl shadow-[10px_10px_20px_rgba(218,
    _213,_213,_0.15)] bg-white"
    >
      {sidebarLinks.map((link) => (
        <div key={link.title}>
          {link.icon}
          {link.title}
        </div>
      ))}
    </div>
  );
};

export default DashboardSidebar;
