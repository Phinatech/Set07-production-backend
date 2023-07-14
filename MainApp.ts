import express,{Application,Request,Response} from "express"
import cors from "cors"


export const Mainapp = (app:Application) => {
    app.use(cors())
    .use(express.json());

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