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
    <div>
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
