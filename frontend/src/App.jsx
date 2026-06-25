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

      if (res.data.message === "Login Successful") {
        alert("Login Successful");
        setIsLoggedIn(true);
      } else {
        alert(res.data.message);
        setIsLoggedIn(false);
      }
    } catch (err) {
      alert("Server Error");
      setIsLoggedIn(false);
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
            width: "320px",
            boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
          }}
        >
          <h2>🎓 Student Login</h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />

          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "10px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
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
            boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
          }}
        >
          <h1>🎉 Welcome Dashboard</h1>

          <p>
            <strong>Student Name:</strong> Harshit
          </p>

          <p>
            <strong>Work:</strong> MERN Developer
          </p>

          <p>
            <strong>Status:</strong> Login Successful ✅
          </p>

          <button
            onClick={() => setIsLoggedIn(false)}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
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