import { IconDashboard } from "components/icons";
import React from "react";
import { NavLink } from "react-router-dom";

const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
];

const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] rounded-3xl shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] bg-white px-[14px] py-10">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className="flex items-center md:justify-center md:w-12 md:h-12 md:rounded-3xl"
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
