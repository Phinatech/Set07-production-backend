import {Request,Response} from "express"
import authModel from "../Model/authModel"
import bcrypt from "bcrypt"


//creating all user
export const createUser = async (req:Request, res:Response) => {
    try {
        const {userName,email,avatar,password} = req.body


        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt); 

        const CreatingUser = await authModel.create({
          userName,
          email,
          avatar,
          password:hash
        });


        return res.status(200).json({
            message:"User created successfully",
            data: CreatingUser
        })
        
    } catch (error) {
        return res.status(404).json({
            message:"An error occured while creating a user"
        })
    }
}

//getting all user
export const AllUser = async (req:Request, res:Response) => {
    try {   
        const user = await authModel.find()
        return res.status(200).json({
            message:`Gotten ${user.length} successfully`,
            data: user
        })
        
    } catch (error) {
        return res.status(404).json({
            message:"Error creating"
        })
    }
}

//login in a user
export const login = async (req:Request, res:Response) => {
    try {   
        const {email, password} = req.body

        const getuser = await authModel.findOne({email})

        //comparing the signed password
        const hash = await bcrypt.compare(password, getuser?.password!)

        //checking if user exist
     if(getuser){
          if (getuser) {
            res.status(200).json({
              message: `Gotten ${getuser.userName}`,
              data: getuser._id,
            });
          } else {
            res.status(404).json({
              message: "password is not correct",
            });
          }

     } else{
        res.status(404).json({
            message:"usser cannot be found"
        })
     }
      
        
    } catch (error) {
        return res.status(404).json({
            message:"Error creating"
        })
    }
}

//getting a single user
export const getOneUser = async (req:Request, res:Response) => {
    try {   
        const {id} = req.params
        const user = await authModel.findById(id)
        return res.status(200).json({
            message:"Gotten one user ",
            data: user
        })
        
    } catch (error) {
        return res.status(404).json({
            message:"Error creating"
        })
    }
}

//updating a user
export const updateOneUser = async (req:Request, res:Response) => {
    try {   
        const {id} = req.params
        const {userName, avatar} = req.body
        const user = await authModel.findByIdAndUpdate(id,{
            userName,
            avatar
        },
         {new:true})
        return res.status(201).json({
            message:"updating one user ",
            data: user
        })
        
    } catch (error) {
        return res.status(404).json({
            message:"Error updating on user"
        })
    }
}

//deleting a user
export const deleteOneUser = async (req:Request, res:Response) => {
    try {   
        const {id} = req.params
        
        const user = await authModel.findByIdAndUpdate(id)
        return res.status(201).json({
            message:"deleting one user ",
            data: user
        })
        
    } catch (error) {
        return res.status(404).json({
            message:"Error deleting on user"
        })
    }
}