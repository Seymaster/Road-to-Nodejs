const Task = require("../models/Task");

exports.getAllTask = (req,res,next) =>{
    Task.findAll()
    .then(tasks =>{
        console.log(tasks);
        res.status(200).json(tasks)
    })
    .catch(err =>{
        console.log(err)
        res.status(422).json(err)
    })
}

exports.postTask = (req,res,next) =>{
    const task = req.body.task;
    const description = req.body.description;
    Task.create({
        task: task,
        description: description
    })
    .then((result)=>{
        // console.log(result);
        res.status(201).json();
    })
    .catch((err)=>{
        console.log(err);
        res.status(422).json();
    });
}

exports.getTask = (req,res,next) =>{
    const taskid = req.params.id;
    Task.findAll({where: {id:taskid}})
    .then(task =>{
        // console.log(task);
        res.status(201).json(task)
    })
    .catch(err =>{
        console.log(err)
        res.status(404).json(err)
    });
}

exports.updateTask = (req,res,next) =>{
    const taskid = req.params.id;
    const updatetodo = req.body.updatetodo
    const updatedesc = req.body.updatedesc
    Task.findAll({where: {id: taskid}})
    .then(task =>{
        task.task = updatetodo;
        task.description = updatedesc
        task.save();
    })
    .catch(err =>{
        console.log(err);
    })

}

