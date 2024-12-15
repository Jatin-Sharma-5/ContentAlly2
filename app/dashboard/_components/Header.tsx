"use client";
import { FileClock, Home, Settings, WalletCards, Search, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import UsageTrack from "./UsageTrack";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="p-6 shadow-lg bg-white flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden block p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
        <Link href={"/"} className="flex items-center gap-2">
          <img
            src="/logo1.jpg"
            alt="ContentAlly Logo"
            className="logo"
            width={100}
            height={50}
          />
          <span className="font-bold text-xl text-black">Content</span>
          <span className="font-bold text-xl text-primary">Ally</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-[4rem] left-0 w-full bg-white lg:flex lg:relative lg:top-0 lg:left-0 lg:w-auto lg:gap-6 lg:justify-center z-50`}
      >
        {MenuList.map((menu, index) => (
          <Link
            key={index}
            href={menu.path}
            className={`flex items-center px-6 py-3 rounded-lg cursor-pointer hover:bg-primary hover:text-white transition-all ${
              path === menu.path ? "bg-primary text-white" : "text-gray-700"
            }`}
          >
            <menu.icon size={20} className="mr-2" />
            <span className="text-sm font-medium">{menu.name}</span>
          </Link>
        ))}
      </nav>

      <div className="  ml-auto ">
        <UsageTrack/>
      </div>

      {/* Search & Demo Section */}
      {/* <div className="flex items-center gap-4">

        <div className="bg-black text-sm text-white rounded-full px-4 py-2 shadow-lg">
          <h2>
            Made By{" "}
            <span className="font-bold text-lg text-amber-300">Jatin Sharma</span>
          </h2>
        </div>
      </div> */}

    </header>
  );
}

export default Header;
