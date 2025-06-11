let tasks = [];
let nextId = 1;

const createTask = (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    const newTask = { id: nextId++, title, description };
    tasks.push(newTask);
    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getTasks = (req, res) => {
  res.status(200).json(tasks, "tasks fetch successfully");
};

const getTaskById = (req, res) => {
  try {
    const taskId = parseInt(req.params.taskId);

    if (isNaN(taskId)) {
      return res.status(400).json({ message: "Task ID must be a number" });
    }

    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateTask = (req, res) => {
  try {
    const taskId = parseInt(req.params.taskId);

    if (isNaN(taskId)) {
      return res.status(400).json({ message: "Task ID must be a number" });
    }

    const { title, description } = req.body;

    const task = tasks.find((t) => t.id === taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    task.title = title;
    task.description = description;

    res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteTask = (req, res) => {
  try {
    const taskId = parseInt(req.params.taskId);

    if (isNaN(taskId)) {
      return res.status(400).json({ message: "Task ID must be a number" });
    }
    const task = tasks.find((t) => t.id === taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    tasks.splice(tasks.indexOf(task), 1);
    return res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export { createTask, getTasks, getTaskById, updateTask, deleteTask };
