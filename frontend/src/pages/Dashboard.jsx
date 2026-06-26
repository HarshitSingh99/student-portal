import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          {/* Welcome */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 shadow-lg">

            <h1 className="text-4xl font-bold">
              👋 Welcome Back, Harshit
            </h1>

            <p className="mt-3 text-lg">
              Manage your tasks efficiently and stay productive.
            </p>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

            <StatsCard
              title="📚 Total Tasks"
              value="12"
              color="text-blue-600"
            />

            <StatsCard
              title="✅ Completed"
              value="8"
              color="text-green-600"
            />

            <StatsCard
              title="⏳ Pending"
              value="4"
              color="text-yellow-500"
            />

            <StatsCard
              title="📈 Progress"
              value="70%"
              color="text-purple-600"
            />

          </div>

          {/* Recent Tasks */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

            <h2 className="text-2xl font-bold mb-5">
              📝 Recent Tasks
            </h2>

            <div className="space-y-3">

              <div className="bg-gray-100 p-4 rounded-xl">
                ✅ React Assignment
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                📘 DBMS Notes
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                💻 Mini Project
              </div>

            </div>

          </div>

          {/* Logout */}
          <button
            onClick={() => navigate("/login")}
            className="mt-8 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;