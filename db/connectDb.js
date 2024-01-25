import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();



const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.URL);
        console.log("connected to mongodb");
    } catch (error) {
        console.log("failed to connect")
    }

}

export default connectDb;