const Task = require("../models/Task");
const middleware = require("../middleware/middleware");
const schemas = require("../middleware/schemas");

exports.getAllTask = (req,res,next) =>{
    Task.findAll()
    .then(tasks =>{
        // console.log(tasks);
        res.status(200).json(tasks)
    })
    .catch(err =>{
        console.log(err)
        res.status(422).json(err)
    })
};

exports.postTask = (req,res,next) =>{
    const task = req.body.task;
    const description = req.body.description;
    Task.create({
        task: task,
        description: description
    })
    .then((result)=>{
        // console.log(result);
        res.send({
            status: 200,
            message: "Your task has been saved"
        }),201
    })
    .catch((err)=>{
        console.log(err);
        res.status(422).json();
    });
};

exports.getTask = (req,res,next) =>{
    const taskid = req.params.id;
    Task.findOne({where: {id:taskid}})
        .then(task =>{
            if(task === null){
                res.status(404).json({
                    status:404,
                    message: "No task available here"})
            }
            else{
            res.status(201).json(task)};
        })
        .catch(err =>{
            console.log(err)
            res.status(404).json({
                status:404,
                error : err,
                message: "An error occurred"})
        });
};

exports.updateTask = (req,res,next) =>{
    const taskid = req.params;
    // console.log(typeof(taskid));
    const updatetask = req.body.updatetask;
    const updatedesc = req.body.updatedesc;
    Task.findOne({where: {id: taskid}})
    .then( task =>{
        // console.log(task)
        if(task == 1){
        task.task = updatetask;
        task.description = updatedesc
        task.save()
        res.status(201).json(task)
        }
        else{
            res.send({
                message: "Cannot update task, maybe task not available"
            })
        }
    })
    .catch(err =>{
        console.log(err);
    });
};

exports.deleteTask = (req,res,next) =>{
    const taskid = req.params.id;
    Task.findOne({where: {id:taskid}})
        .then(task =>{
            // console.log(task);
            if(task ==1 ){
                task.destroy()
                res.send({
                    status: 200,
                    message: "Your task with id= ${taskid} has been deleted"
                });
            }else{
                res.send({
                    message: "Cannot delete task, maybe task not available"
                });
            }
        })
        .catch(err =>{
            console.log(err)
            res.status(404).json(err)
        });
    };
