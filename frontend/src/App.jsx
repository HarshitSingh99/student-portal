import { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://student-portal-backend-w8dj.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      alert(res.data.message);
      setIsLoggedIn(true);
    } catch (err) {
      alert("Login Failed");
      console.log(err);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #667eea, #764ba2)",
      }}
    >
      {!isLoggedIn ? (
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            textAlign: "center",
            width: "300px",
          }}
        >
          <h2>🎓 Student Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", margin: "10px 0", padding: "8px" }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", margin: "10px 0", padding: "8px" }}
          />

          <button
            onClick={handleLogin}
            style={{
              background: "blue",
              color: "white",
              padding: "10px",
              width: "100%",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      ) : (
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h1>🎉 Welcome Dashboard</h1>

          <p>Student Name: Harshit</p>
          <p>Work: MERN Developer</p>
          <p>Task: Login System Completed</p>

          <button
            onClick={() => setIsLoggedIn(false)}
            style={{
              background: "red",
              color: "white",
              padding: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;