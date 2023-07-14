import {Request, Response} from "express";
import mongoose from "mongoose";
import taskModel from "../Model/taskModel";
import authModel from "../Model/authModel";
import stepModel from "../Model/stepModel";

//creating a a step by that is been assigned to a particular task

export const creatingStep =async (req:Request, res:Response) => {
    
    try {
     const {id} = req.params 
     const {assignedName, assignedPriority, assignedTask} = req.body 
        //getting who the task is bbben assigned to my the team lead
     const userAuth = await authModel.findOne({userName:assignedName});
        // geeting the task that step wiil be created for
     const task = await taskModel.findById(id)

     //checking

     if(userAuth){
        const step = await stepModel.create({
            assignedTask,
            assignedName: userAuth?.userName,
            assignedAvatar:userAuth.avatar,
            assignedPriority
        })
        //pushing the id of the creted step to the user
     }else {
        res.status(404).json({
            message:"An error occured while creating the steps for to the assigned user"
        })
     }
        
    } catch (error) {
    res.status(404).json({
    message: "Error Creating task",
    });
  }
    }