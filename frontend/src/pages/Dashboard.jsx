import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">

        <h1 className="text-4xl font-bold text-indigo-700">
          🎉 Welcome
        </h1>

        <p className="mt-4 text-gray-600">
          Student Task Manager Dashboard
        </p>

        <button
          onClick={() => navigate("/login")}
          className="mt-6 bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Dashboard;