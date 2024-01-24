const express = require('express');
const router = express.Router();
const Task = require('../models/todo.model');

//get all task
router.get('/todo',async(req,res)=>{
    try{
        const tasks=await Task.find();
        res.status(200).json(tasks);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})
//create task

router.post('/todo',async(req,res)=>{
    const task = new Task({
       title:req.body.title,
       description:req.body.description
    })
    try{
        const newTask = await task.save();
        res.status(201).json(newTask);

    }catch(error){
        res.status(500).json({message:error.message});
    }
})

//get a specific task
router.get('/todo/:id',async(req,res)=>{
    try{
        let id = req.params.id;
        const task = await Task.findById(id);
        res.status(200).json(task);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

//update task
router.put('/todo/:id',async(req,res)=>{
    try{
    let id = req.params.id;
    const task = await Task.findOneAndUpdate({_id:id},req.body,{new:true});
    res.status(200).json(task);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

router.delete('/todo/:id',async(req,res)=>{
    try{
        let id = req.params.id;
       const task = await Task.findByIdAndDelete(id);
       res.status(200).json(task);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

module.exports=router