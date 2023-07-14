import {Request,Response} from "express"
import authModel from "../Model/authModel"
// import bcrypt from "bcrypt"


//geetting all user
export const createUser = async (req:Request, res:Response) => {
    try {
        const {userName,email,avatar,password} = req.body
        // const salt = await bcrypt.genSalt(10);
        // const hash = await bcrypt.hash(password, salt); 

        
        const user = await authModel.create({
          userName,
          email,
          avatar,
          password
        });


        return res.status(200).json({
            message:"User created successfully",
            data: user
        })
        
    } catch (error) {
        return res.status(404).json({
            message:"Error creating"
        })
    }
}

//geetting all user
export const AllUser = async (req:Request, res:Response) => {
    try {   
        const user = await authModel.find()
        return res.status(200).json({
            message:"User successfully gotten ",
            data: user
        })
        
    } catch (error) {
        return res.status(404).json({
            message:"Error creating"
        })
    }
}