const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    }
})

const Task = mongoose.model('Task',todoSchema);
module.exports= Task;