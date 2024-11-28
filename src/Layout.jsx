import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/custom/Sidebar";
import Navbar from "./components/custom/Navbar";
import Home from "./components/pages/Home";
import OrderList from "./components/pages/OrderList";
import NotificationBar from "./components/custom/NotificationBar";

const Layout = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();
  const isOnOrdersPage = location.pathname === "/orders";

  return (
    <div className="font-inter min-h-screen grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] bg-background [font-feature-settings:'ss01']">
      <aside
        className={`fixed inset-y-0 left-0 z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative w-[212px] border-r border-border_primary bg-background transition-transform`}
      >
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(false)}
        />
      </aside>

      <main
        className="flex flex-col lg:relative"
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <div className="sticky top-0 z-40 bg-background">
          <Navbar
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            toggleNotification={() =>
              setIsNotificationOpen(!isNotificationOpen)
            }
            isNotificationOpen={isNotificationOpen}
            isOnOrdersPage={isOnOrdersPage}
          />
        </div>

        <div className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<OrderList />} />
          </Routes>
        </div>
      </main>

      {!isOnOrdersPage && (
        <aside
          className={`fixed inset-y-0 right-0 z-50 transform ${
            isNotificationOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 lg:relative w-[230px] sm:w-[280px] border-l border-border_primary bg-background transition-transform`}
        >
          <NotificationBar isOpen={isNotificationOpen} />
        </aside>
      )}

      {/* Backdrop for mobile model */}
      {(isNotificationOpen || isSidebarOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden"
          onClick={() => {
            setIsSidebarOpen(false);
            setIsNotificationOpen(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default Layout;
