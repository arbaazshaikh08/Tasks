import { Router } from "express";
import {
  createTask, 
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../controller/TaskController.js";

const router = Router();

router.route("/create").post(createTask);
router.route("/getTasks").get(getTasks);
router.route("/getById/:taskId").get(getTaskById);
router.route("/update/:taskId").put(updateTask);
router.route("/delete/:taskId").delete(deleteTask);

export default router;