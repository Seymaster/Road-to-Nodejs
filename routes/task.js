const express = require("express");
const { body } = require("express-validator")
const router = express.Router();
const taskController = require("../controller/taskapp");

// GET /tasks
router.get("/tasks", taskController.getAllTask);

// POST /tasks
router.post("/tasks",
    [
        body('task')
            .trim()
            .isLength({min: 5, max:50})
            .withMessage('only accepts input more than 5 words'),
        body('description')
            .trim()
            .isLength({min: 10,max:500})
    ],
    taskController.postTask
);

// GET /tasks/id
router.get("/tasks/:id", taskController.getTask);

// PATCH /tasks/id
router.patch("/tasks/:id", taskController.updateTask);

// DELETE /tasks/id
router.delete("/tasks/:id", taskController.deleteTask);



module.exports = router;