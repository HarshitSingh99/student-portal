import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000/api/tasks";

function AddTask() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = async () => {
    if (!title) {
      alert("Please enter task title");
      return;
    }

    try {
      await axios.post(`${API}/add`, {
        title,
        description,
        userEmail: "harshit@gmail.com",
      });

      alert("Task Added Successfully 🎉");

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Failed to add task");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex justify-center items-center">

      <div className="bg-white w-[500px] p-8 rounded-3xl shadow-2xl">

        <h1 className="text-3xl font-bold text-center text-indigo-700">
          ➕ Add New Task
        </h1>

        <input
          type="text"
          placeholder="Task Title"
          className="w-full border p-3 rounded-xl mt-6"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Task Description"
          className="w-full border p-3 rounded-xl mt-4 h-32"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={addTask}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl mt-6 hover:bg-indigo-700"
        >
          Add Task
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-gray-300 py-3 rounded-xl mt-3 hover:bg-gray-400"
        >
          Back
        </button>

      </div>

    </div>
  );
}

export default AddTask;