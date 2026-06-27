import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import ProgressCard from "../components/ProgressCard";

const API = "http://localhost:5000/api/tasks";

function Dashboard() {
  const navigate = useNavigate();

  const userEmail =
    localStorage.getItem("email") || "harshit@gmail.com";

  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await axios.get(`${API}/${userEmail}`);
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const completeTask = async (id) => {
    try {
      await axios.put(`${API}/${id}`, {
        status: "Completed",
      });

      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = total - completed;

  const progress =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-10 text-white shadow-2xl">

            <h1 className="text-5xl font-bold">
              👋 Welcome Back
            </h1>

            <p className="mt-4 text-lg">
              Stay focused and complete your daily goals.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

            <StatsCard
              title="📚 Total Tasks"
              value={total}
              color="text-blue-600"
            />

            <StatsCard
              title="✅ Completed"
              value={completed}
              color="text-green-600"
            />

            <StatsCard
              title="⏳ Pending"
              value={pending}
              color="text-yellow-500"
            />

            <StatsCard
              title="📈 Progress"
              value={`${progress}%`}
              color="text-purple-600"
            />

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

            <ProgressCard />

            <div className="bg-white rounded-3xl shadow-xl p-6">

              <h2 className="text-2xl font-bold">
                📝 Recent Tasks
              </h2>

              <div className="space-y-4 mt-6">                {tasks.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    No Tasks Found
                  </div>
                ) : (
                  tasks.map((task) => (
                    <div
                      key={task._id}
                      className="flex justify-between items-center bg-slate-100 rounded-xl p-4"
                    >
                      <div>
                        <h3 className="font-bold text-lg">
                          {task.title}
                        </h3>

                        <p className="text-gray-600">
                          {task.description}
                        </p>

                        <span
                          className={`text-sm font-bold ${
                            task.status === "Completed"
                              ? "text-green-600"
                              : "text-yellow-600"
                          }`}
                        >
                          {task.status}
                        </span>
                      </div>
<div className="flex gap-3">

  {task.status !== "Completed" && (
    <button
      onClick={() => completeTask(task._id)}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
    >
      Complete
    </button>
  )}

  <button
    onClick={() => {
      const newTitle = prompt("Enter New Task Title", task.title);
      const newDescription = prompt(
        "Enter New Description",
        task.description
      );

      if (!newTitle || !newDescription) return;

      axios
        .put(`http://localhost:5000/api/tasks/edit/${task._id}`, {
          title: newTitle,
          description: newDescription,
        })
        .then(() => {
          alert("Task Updated Successfully ✅");
          getTasks();
        })
        .catch((err) => {
          console.log(err);
          alert("Server Error");
        });
    }}
    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
  >
    Edit
  </button>

  <button
    onClick={() => deleteTask(task._id)}
    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
  >
    Delete
  </button>

</div>
                    </div>
                  ))
                )}
              </div>

            </div>

          </div>

          <div className="mt-8">
            <button
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-bold"
            >
              Logout
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;