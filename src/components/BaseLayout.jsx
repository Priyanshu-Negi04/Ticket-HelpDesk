import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function BaseLayout({ children }) {

    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        navigate("/login");
    }

    // Get current user and role
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const role = currentUser.role || "user";

  // Sidebar links for each role
  const sidebarLinks = {
    user: [
      { to: "/dashboard", label: "Dashboard", icon: "fas fa-th-large" },
      { to: "/new-ticket", label: "New Ticket", icon: "fas fa-ticket-alt" },
      { to: "/my-ticket", label: "My Ticket", icon: "fas fa-inbox" },
    ],
    operation: [
      { to: "/operation-dashboard", label: "Dashboard", icon: "fas fa-th-large" },
      { to: "/ticket-approval", label: "Ticket Approval", icon: "fas fa-check-circle" },
      { to: "/my-ticket", label: "My Ticket", icon: "fas fa-inbox" },
      { to: "/performance", label: "Performance", icon: "fas fa-chart-line" },
    ],
    support: [
      { to: "/support-dashboard", label: "Dashboard", icon: "fas fa-th-large" },
      { to: "/my-ticket", label: "My Ticket", icon: "fas fa-inbox" },
      { to: "/performance", label: "Performance", icon: "fas fa-chart-line" },
    ],
    admin: [
      { to: "/admin-dashboard", label: "Dashboard", icon: "fas fa-th-large" },
      { to: "/database", label: "Database", icon: "fas fa-database" },
      { to: "/settings", label: "Settings", icon: "fas fa-cogs" },
      { to: "/user-log-history", label: "User Log History", icon: "fas fa-history" },
    ],
  };

  // Fallback in case of unknown role
  const links = sidebarLinks[role] || sidebarLinks["user"];

  return (
    <div className="min-h-screen flex flex-col font-serif bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between bg-[#5DE0C9] px-4 py-3 border-b border-[#2B9AE8] w-full h-15">
        <h1 className="italic font-bold text-white text-xl select-none">Helpdesk</h1>
        <nav className="flex items-center space-x-4 text-black text-sm font-semibold select-none">
          <div className="inline-flex rounded border border-black shadow-[2px_2px_5px_rgba(0,0,0,0.2)] overflow-hidden">
            <button className="bg-black text-white px-2 py-1 border-r border-black">BM</button>
            <button className="bg-[#5DE0C9] text-black px-2 py-1 border-l border-black">BI</button>
          </div>
          <i className="fas fa-bell cursor-pointer"></i>
          <i
            className="fas fa-user cursor-pointer"
            title="Profile"
            onClick={() => navigate("/profile")}
          ></i>
          <i
            className="fas fa-sign-out-alt cursor-pointer"
            title="Logout"
            onClick={handleLogout}
          ></i>
        </nav>
      </header>

      {/* Main Section: Sidebar + Content */}
      <div className="flex flex-1 w-full">
        {/* Sidebar */}
        <aside className="bg-gray-200 w-64 flex flex-col space-y-3 py-4 px-3 select-none border-r border-gray-300">
          <ul>
            {links.map(({ to, label, icon }) => (
              <li key={to} className="sidebar-item">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    "flex items-center space-x-2 text-black font-semibold rounded px-2 py-1 " +
                    (isActive ? "bg-white" : "hover:bg-white")
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && <i className="fas fa-angle-right"></i>}
                      <i className={icon}></i>
                      <span>{label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content + Footer Wrapper */}
        <div className="w-full flex flex-col flex-1">
          {/* Content */}
          <main className="p-4 bg-white border-b border-[#2B9AE8] flex-1">
            {children}
          </main>
          {/* Footer */}
          <footer className="bg-[#5DE0C9] text-black text-xm font-extrabold text-center flex items-center justify-center select-none border-t border-[#2B9AE8] h-10">
            Footer Area
          </footer>
        </div>
      </div>
    </div>
  );
}
