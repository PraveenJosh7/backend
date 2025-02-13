// import mongoose that will help us to connect with database

import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})

connectDB()













/*
//^ 2nd Approach (basic way)
import express from "express"

const app = express()

  (async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      // listening
      app.on("error", (error) => {
        console.log("ERROR:", error);
        throw error  // throwing an error if not able to talk with database 
      })

      app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`)
      })

    } catch (error) {
      console.error("ERROR:", error)
      throw err
    }
  })()

    */