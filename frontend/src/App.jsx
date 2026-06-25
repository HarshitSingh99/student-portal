import { useState } from "react";
import axios from "axios";

const API = "https://student-portal-backend-w8dj.onrender.com/api/auth";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const register = async () => {
    try {
      const res = await axios.post(`${API}/register`, {
        name,
        email,
        password,
      });

      alert(res.data.message);

      setIsLogin(true);
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  const login = async () => {
    try {
      const res = await axios.post(`${API}/login`, {
        email,
        password,
      });

      if (res.data.message === "Login Successful") {
        alert("Login Successful");
        setIsLoggedIn(true);
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Login Failed");
    }
  };

  if (isLoggedIn) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#667eea",
        }}
      >
        <div
          style={{
            background: "white",
            padding: 30,
            borderRadius: 10,
            textAlign: "center",
          }}
        >
          <h1>🎉 Welcome Dashboard</h1>

          <h3>{name || "Student"}</h3>

          <button
            onClick={() => setIsLoggedIn(false)}
            style={{
              padding: 10,
              background: "red",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right,#667eea,#764ba2)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: 30,
          width: 330,
          borderRadius: 10,
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          {isLogin ? "Student Login" : "Student Register"}
        </h2>

        {!isLogin && (
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: 10, margin: "8px 0" }}
          />
        )}

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: 10, margin: "8px 0" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: 10, margin: "8px 0" }}
        />

        {isLogin ? (
          <>
            <button
              onClick={login}
              style={{
                width: "100%",
                padding: 10,
                background: "blue",
                color: "white",
                border: "none",
              }}
            >
              Login
            </button>

            <p
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => setIsLogin(false)}
            >
              Don't have an account? Register
            </p>
          </>
        ) : (
          <>
            <button
              onClick={register}
              style={{
                width: "100%",
                padding: 10,
                background: "green",
                color: "white",
                border: "none",
              }}
            >
              Register
            </button>

            <p
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => setIsLogin(true)}
            >
              Already have an account? Login
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;