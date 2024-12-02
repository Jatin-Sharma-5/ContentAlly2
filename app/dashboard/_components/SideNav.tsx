"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log("Current path:", path);
  }, [path]);

  return (
    <div className="h-screen p-5 shadow-sm border">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src="/logo1.jpg" alt="ContentAlly Logo" className="logo" width={120} height={200} />
        {/* <h1 className="text-3xl">ContentAlly</h1> */}
      </div>
      <hr className="mt-4 border" />

      <nav className="mt-4">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 mb-4 p-2 rounded cursor-pointer hover:bg-primary group ${
              path === menu.path ? "bg-primary text-white" : ""
            }`}
          >
            <menu.icon
              className={`group-hover:text-white transition-colors duration-200 ${
                path === menu.path ? "text-white" : ""
              }`}
              size={20}
            />
            <h2
              className={`text-sm font-medium group-hover:text-white transition-colors duration-200 ${
                path === menu.path ? "text-white" : ""
              }`}
            >
              {menu.name}
            </h2>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default SideNav;
