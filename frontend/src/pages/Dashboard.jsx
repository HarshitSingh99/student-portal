function Dashboard({ setIsLoggedIn }) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">

        <h1 className="text-4xl font-bold text-indigo-700">
          🎉 Welcome
        </h1>

        <p className="mt-3 text-gray-600">
          Student Task Manager Dashboard
        </p>

        <button
          onClick={() => setIsLoggedIn(false)}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Dashboard;