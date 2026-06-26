import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Dashboard setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <>
      {page === "login" ? (
        <Login
          setPage={setPage}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <Register
          setPage={setPage}
        />
      )}
    </>
  );
}

export default App;