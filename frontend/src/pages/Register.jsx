import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "https://student-portal-backend-w8dj.onrender.com/api/auth";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(`${API}/register`, {
        name,
        email,
        password,
      });

      alert(res.data.message);

      navigate("/login");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-purple-700">
          🎓 Student Task Manager
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Create Your Account 🚀
        </p>

        <input
          placeholder="Name"
          className="w-full p-3 border rounded-xl mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
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
          onClick={register}
          className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700"
        >
          Register
        </button>

        <p className="text-center mt-5">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="text-purple-700 font-bold cursor-pointer ml-2"
          >
            Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default Register;