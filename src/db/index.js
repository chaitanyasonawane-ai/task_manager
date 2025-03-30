// db connect
import mongoose from "mongoose";

// db is in another continent --> async
const connectDB = async() => {
   try {
        await mongoose.connect(process.env.MONGO_URI)
        // URI from .env
        console.log("MonogDB connected")
   } catch (error) {
        console.error("Mongodb connection failed", error);
        process.exit(1)
   }
}

export default connectDB;
