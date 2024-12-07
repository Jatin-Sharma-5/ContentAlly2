import React from "react";
import Header from "./_components/Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-slate-200 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto bg-slate-200 p-4">
        {children}
      </div>
    </div>
  );
}

export default Layout;