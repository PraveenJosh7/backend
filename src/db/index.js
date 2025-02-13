// connecting database with this file

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    // .connect.host ye use kiya jata hai taki pata chale kaun se server pe connect ho rahe hain

  } catch (error) {
    console.log("MONGODB connection failed", error);
    process.exit(1)
  }
}

export default connectDB