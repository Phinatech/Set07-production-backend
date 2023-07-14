import express,{Application,Request,Response} from "express"
import cors from "cors"
import morgan from "morgan"
import auth from "./router/authRouter"

export const Mainapp = (app:Application) => {
    app.use(cors())
    .use(express.json())
    .use(morgan("dev"))
    .use("/api/auth", auth)

   app.get("/", (req:Request, res:Response)=>{
try {
    res.status(200).json({
        message:"Awesome request"
    })
} catch (error) {
    res.status(404).json({
        message:"Error found"
    })
}
   })
}