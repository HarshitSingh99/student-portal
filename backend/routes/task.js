const express = require("express");
const router = express.Router();

const Task = require("../models/Task");

// Add Task
router.post("/add", async (req, res) => {
  try {
    const { title, description, userEmail } = req.body;

    const task = new Task({
      title,
      description,
      userEmail,
    });

    await task.save();

    res.json({
      message: "Task Added Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Get All Tasks
router.get("/:email", async (req, res) => {
  try {
    const tasks = await Task.find({
      userEmail: req.params.email,
    });

    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Delete Task
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task Deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Update Task Status
router.put("/:id", async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, {
      status: req.body.status,
    });

    res.json({
      message: "Task Updated",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;