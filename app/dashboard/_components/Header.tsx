"use client";
import { FileClock, Home, Settings, WalletCards, Search, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import UsageTrack from "./UsageTrack";
import { UserButton } from "@clerk/nextjs";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MenuList = [
    { name: "Home", icon: Home, path: "/dashboard" },
    { name: "History", icon: FileClock, path: "/dashboard/history" },
    // { name: "Billing", icon: WalletCards, path: "/dashboard/billing" },
    { name: "Settings", icon: Settings, path:"/dashboard/settings" },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log("Current path:", path);
  }, [path]);

  return (
    <header className="p-4 shadow-lg bg-white flex items-center justify-between relative">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden block p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
        
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <img
            src="/logo1.jpg"
            alt="ContentAlly Logo"
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl text-black">Content</span>
          <span className="font-bold text-xl text-primary">Ally</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-[4rem] left-0 w-full bg-white lg:flex lg:relative lg:top-0 lg:left-0 lg:w-auto lg:gap-6 lg:justify-center z-50`}
      >
        {MenuList.map((menu, index) => (
          <Link
            key={index}
            href={menu.path}
            className={`flex items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-primary hover:text-white transition-all ${
              path === menu.path ? "bg-primary text-white" : "text-gray-700"
            }`}
          >
            <menu.icon size={20} className="mr-2" />
            <span className="text-sm font-medium">{menu.name}</span>
          </Link>
        ))}
      </nav>

      {/* Credits Section */}
      {/* <div>
        <UsageTrack />
      </div> */}
      <div className="gap-4">
      <UserButton/>
      </div>
      
    </header>
  );
}

export default Header;
