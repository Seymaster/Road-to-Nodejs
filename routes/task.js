const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskapp");
const middleware = require("../middleware/middleware")
const schemas = require("../middleware/schemas")
const { cloudinaryConfig, uploader  } = require("../configs/cloudinary");
const { profileUpload } = require("../multerUpload");

// GET /tasks
router.get("/tasks", taskController.getAllTask);

// POST /tasks
router.use("*",cloudinaryConfig)
router.post("/tasks", profileUpload, middleware.addTaskmiddleware(schemas.taskPOST, 'body'), taskController.postTask);

// GET /tasks/id
router.get("/tasks/:id", middleware.paramsmiddleware(schemas.taskParams, 'params'), taskController.getTask);

// PATCH /tasks/id
router.put("/tasks/:id", taskController.updateTask);

// DELETE /tasks/id
router.delete("/tasks/:id", taskController.deleteTask);



module.exports = router;