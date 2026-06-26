import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000/api/auth";

function Login() {
  const navigate = useNavigate();

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
        navigate("/dashboard");
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

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-xl mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-xl mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700"
        >
          Login
        </button>

        <p className="text-center mt-5">
          Don't have an account?
          <span
            onClick={() => navigate("/register")}
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