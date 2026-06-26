import { LayoutDashboard, CheckSquare, User, Settings, LogOut } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-indigo-700 text-white p-6">

      <h2 className="text-2xl font-bold mb-10">
        🎓 STM
      </h2>

      <ul className="space-y-5">

        <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-300">
          <LayoutDashboard size={22} />
          Dashboard
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-300">
          <CheckSquare size={22} />
          My Tasks
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-300">
          <User size={22} />
          Profile
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-yellow-300">
          <Settings size={22} />
          Settings
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-red-300 mt-16">
          <LogOut size={22} />
          Logout
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;