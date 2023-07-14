import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const URL = process.env.MongoDbConnection;

export const db = ()=>{
    mongoose.connect(URL!)
    .then(()=>{
        console.log("server is conntected")
    })
}