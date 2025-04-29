import React from "react";
import { Settings, User, LogOut } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

function App() {
  const { logout, authUser } = useAuthStore();

  return (
    <nav className="bg-deepBlue text-white p-4 flex items-center justify-between font-sans">
      <Link to={"/"}>
        <div className="text-xl font-bold">Bubble Chat</div>
      </Link>

      <div className="flex items-center space-x-6">
        <Link to={"/settings"}>
          <button
            className="flex items-center space-x-1 hover:text-gray-300 transition-colors duration-200"
            aria-label="Settings"
          >
            <Settings size={21} />
          </button>
        </Link>
        {authUser && (
          <>
            <Link to={"/profile"}>
              <button
                className="flex items-center space-x-1 hover:text-gray-300 transition-colors duration-200"
                aria-label="Profile"
              >
                <User size={21} />
              </button>
            </Link>

            <button
              onClick={logout}
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors duration-200"
              aria-label="Logout"
            >
              <LogOut size={21} />
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default App;
