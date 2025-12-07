"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";

export default function Sidebar({
  sidebarOpen,
  menuItems,
  onNavigateToHome,
  onLogout,
}) {
   const pathname = usePathname();
  const getActiveMenu = () => {
    let active = null;
    let maxLength = 0;

    menuItems.forEach((item) => {
      if (pathname === item.href) {
        active = item.id;
        maxLength = item.href.length;
      } else if (
        pathname.startsWith(item.href + "/") &&
        item.href.length > maxLength
      ) {
        active = item.id;
        maxLength = item.href.length;
      }
    });

    return active;
  };

  const activeMenu = getActiveMenu();

  return (
    <aside
      className={`${sidebarOpen ? "w-64" : "w-20"} 
      bg-linear-to-b from-blue-600 to-purple-600 text-white
      transition-all duration-300 flex flex-col`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-white/20">
        <button
          onClick={onNavigateToHome}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity w-full"
        >
          <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center shrink-0">
            <span className="font-bold text-lg">GP</span>
          </div>

          {sidebarOpen && (
            <div className="text-left">
              <p className="font-bold">Go PTN</p>
              <p className="text-xs opacity-75">Admin Panel</p>
            </div>
          )}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          // Aktif jika pathname sama persis atau jika pathname berada di bawah route item
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`w-full flex items-center gap-3 px-6 py-3 transition-all ${
                activeMenu === item.id
                  ? "bg-white/20 border-r-4 border-white"
                  : "hover:bg-white/10"
              }`}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-6 border-t border-white/20">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 
          bg-white/10 hover:bg-white/20 rounded-lg transition-all"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {sidebarOpen && <span className="text-sm">Keluar</span>}
        </button>
      </div>
    </aside>
  );
}
