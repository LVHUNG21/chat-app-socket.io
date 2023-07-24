const express=require('express');
const userRouter=require('./Routes/userRoute')
const chatRouter=require('./Routes/chatRoute')
const messageRouter=require('./Routes/messageRoute');
//cors allow us commucating with frontend
const cors=require('cors');
const  app=express();
require("dotenv").config();
const mongoose=require("mongoose");
// use json data
app.use(express.json());
app.use(cors());
app.use("/api/user",userRouter);
app.use("/api/chat",chatRouter);
app.use("/api/message",messageRouter);


app.get('/',(req,res)=>{
    res.send("welcome our chat app apis,...")
})


const port = process.env.PORT || 5000;
const uri=process.env.ATLAS_URI;



app.listen(port,(req,res)=>{
    console.log(`server running on port... :${port}`)
})
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("MOngodb connnection established")).catch((e)=>{console.log("mongodb connection failed",e.message)})
