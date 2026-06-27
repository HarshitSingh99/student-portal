import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/tasks";

function ProgressCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = async () => {
    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    try {
      const userEmail = localStorage.getItem("email");

      await axios.post(`${API}/add`, {
        title,
        description,
        userEmail,
      });

      alert("Task Added Successfully ✅");

      setTitle("");
      setDescription("");

      window.location.reload();

    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        ➕ Add New Task
      </h2>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-3 rounded-lg mb-4"
      />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-3 rounded-lg mb-4"
        rows="4"
      />

      <button
        onClick={addTask}
        className="w-full bg-indigo-600 text-white py-3 rounded-lg"
      >
        Add Task
      </button>

    </div>
  );
}

export default ProgressCard;