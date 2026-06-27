const express = require("express");
const router = express.Router();

const Task = require("../models/Task");

// ==========================
// Add Task
// ==========================
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

// ==========================
// Get All Tasks
// ==========================
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

// ==========================
// Delete Task
// ==========================
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task Deleted Successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// ==========================
// Edit Task
// ==========================
router.put("/edit/:id", async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
      },
      {
        new: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task Not Found",
      });
    }

    res.json({
      message: "Task Updated Successfully",
      task,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// ==========================
// Complete Task
// ==========================
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task Not Found",
      });
    }

    res.json({
      message: "Task Updated Successfully",
      task,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;