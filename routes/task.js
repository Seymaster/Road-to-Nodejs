const express = require("express");
const { body } = require("express-validator/check")
const router = express.Router();
const taskController = require("../controller/taskapp");

// GET /tasks
router.get("/tasks", taskController.getAllTask);

// POST /tasks
router.post("/tasks",
    [
        body('task')
            .trim()
            .isLength({min: 5, max:50}),
        body('description')
            .trim()
            .isLength({min: 10,max:500}),
    ],
    taskController.postTask
);

// GET /tasks/id
router.get("/tasks/:id", taskController.getTask)

// POST /tasks/id


module.exports = router;