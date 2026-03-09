const mongoose = require("mongoose");

//Task Schema - Schema is like a blueprint for a document
const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Task title is required"],          // validation message   
        },
        completed: {
            type: Boolean,
            default: false,
        },
        createdAT:{
            type: Date,
            default: Date.now
        },
    }
);

//Task - mongooese model use for crud operations
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;