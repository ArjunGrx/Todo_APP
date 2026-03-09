const Task = require('../models/Task');

//to get task data 
const getTasks = async (req, res) => {
    try {
        const task = await Task.find().sort({createdAT: -1})   //sort by latest
        res.status(200).json({data : task});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


//to create task data
const createTask = async (req, res) => {
    try {
        const { title } = req.body;
        const task = await Task.create({title});
        res.status(201).json({data: task});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//to update task
const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
            new: true,             //return updated documents
            runValidators: true    // run schema validation
        })

        if(!updatedTask) {
            return res.status(404).json({message: "Task not found"});
        }

        res.status(200).json({data: updatedTask});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//to delete task
const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);

        if(!task) {
            return res.status(404).json({message: "Task not found"});
        }

        res.status(200).json({message: "Task deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message});

    }
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
}