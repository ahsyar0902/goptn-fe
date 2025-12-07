"use client";

import { Menu, X } from "lucide-react";

export default function Topbar({ sidebarOpen, toggleSidebar }) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="px-6 py-4 flex justify-between items-center">
        
        {/* Toggle Sidebar */}
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-lg transition-all"
        >
          {sidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium">Admin Go PTN</p>
            <p className="text-xs text-gray-500">admin@goptn.id</p>
          </div>

          <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <span className="font-bold text-white">A</span>
          </div>
        </div>
      </div>
    </header>
  );
}
