const express = require('express');
const taskRouter = require("./routes/task")
const sequelize = require('./models/database')
const db = require("./models/Task")
const app = express();


app.use(express.json());
app.use("/", taskRouter);


sequelize
.sync(db)
.then((result) =>{
    // console.log(result);
    app.listen(8080, ()=>{
        console.log("server is working")
    });
})
.catch((err) =>{
    console.log(err);
});