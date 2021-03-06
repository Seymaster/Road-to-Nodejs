const express = require('express');
const logger  = require("morgan")
const PORT = process.env.port || 8080;
const taskRouter = require("./routes/task")
const sequelize = require('./models/database')
const db = require("./models/Task")
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(logger('dev'));
app.use("/", taskRouter);

sequelize
.sync(db)
.then((result) =>{
    // console.log(result);
    app.listen(PORT, ()=>{
        console.log("server is working")
    });
})
.catch((err) =>{
    console.log(err);
});