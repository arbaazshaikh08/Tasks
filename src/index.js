import express from "express";
import taskrouter from "./route/TaskRouter.js";
const app = express();

app.use(express.json());

app.use("/api/v1/task", taskrouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
