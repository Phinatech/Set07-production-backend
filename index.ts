import express, { Application,Request,Response } from 'express';
import { Mainapp } from './MainApp';
import { db } from './Config/DbConfig';
import env from "dotenv"

env.config()
const app:Application  = express();

const port : any = process.env.PORT

Mainapp(app)
db()

//port
const server = app.listen(process.env.PORT ||  port, ()=>{
    console.log("server is listening" , port)
})

process.on("uncaughtException", (error:any) =>{
    console.log("server is shutting down due to uncaughtexception")
    console.log(error)
    process.exit(1)
}) 
process.on("unhandledRejection", (reason:any) =>{
    console.log("server is shutting down due to unhandlerejection ")
    console.log(reason)

    server.close(()=>{
        process.exit(1)
    })
}) 