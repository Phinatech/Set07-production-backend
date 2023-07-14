import mongoose,{Schema} from "mongoose";

export interface Iauth{
    userName?: string;
    email?: string;
    password?: string;
    avatar?: string;
}

interface iAuthData extends Iauth, mongoose.Document{}

const Authmodel = new Schema({
userName:{
    type:String,
    required:true,
    unique:true
},
email:{
    type:String,
    required:true,
    trim:true,
    unique:true
},
password:{
    type:String,
    required:true
},
avatar:{
    type:String
}
}, 
{timestamps: true}
)



export default mongoose.model<iAuthData>("User", Authmodel);
