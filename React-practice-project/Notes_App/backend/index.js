import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import noteRoutes from "./routes/route.js";



dotenv.config()
const app = express();
const port = process.env.PORT

app.use(express.json());


try{
    mongoose.connect(process.env.MONGO_URL)
    console.log("connected to MongoDb")
}catch(error){
    console.log("Error connecting to MongoDB", error)
}

app.use("/api/v1/noteapp", noteRoutes)



app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})