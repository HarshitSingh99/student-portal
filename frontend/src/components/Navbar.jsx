function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <div>
        <h1 className="text-2xl font-bold text-indigo-600">
          🎓 Student Task Manager
        </h1>
      </div>

      <div className="flex items-center gap-4">

        <span className="font-semibold text-gray-700">
          👤 Harshit
        </span>

        <img
          src="https://i.pravatar.cc/45"
          alt="profile"
          className="w-11 h-11 rounded-full border-2 border-indigo-500"
        />

      </div>

    </nav>
  );
}

export default Navbar;