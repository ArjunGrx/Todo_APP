const express = require("express");
const cors = require("cors");
const taskRoutes = require('./routes/taskRouter');

const app = express();

//middleware
app.use(cors());
app.use(express.json());


//routes
app.use('/api/tasks', taskRoutes);


module.exports = app;