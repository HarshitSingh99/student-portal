import { useState } from "react";
import axios from "axios";

const API = "https://student-portal-backend-w8dj.onrender.com/api/auth";

function Login({ setPage, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(`${API}/login`, {
        email,
        password,
      });

      if (res.data.message === "Login Successful") {
        alert("Welcome Back 🎉");
        setIsLoggedIn(true);
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-indigo-700">
          🎓 Student Task Manager
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Welcome Back 👋
        </p>

        <div className="mb-5">
          <label className="font-semibold">Email</label>

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="font-semibold">Password</label>

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={login}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Login
        </button>

        <p className="text-center mt-6">
          Don't have an account?
          <span
            onClick={() => setPage("register")}
            className="text-indigo-600 font-bold cursor-pointer ml-2"
          >
            Register
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;