const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express()
app.use(express.json())
app.use(cors())

//Database Connection:-----
mongoose.set("strictQuery",false);
mongoose.connect("mongodb+srv://Twilight123:itscringe4me@cluster0.x0xwnec.mongodb.net/CY")
.then(()=>{
    console.log("MongoDB is Connected....");
})
.catch(()=>{
    console.log("Error");
});
//insert data to database
app.post("/insert",(req,res)=>{
    const data=req.body.data;

    let conn=mongoose.connection;
    conn.collection("blogging_data").insertOne(data,(err)=>{
        if(err){
            console.log("Error");
        }else{
            console.log("Inserted successfully");
            res.status(201).send("Success");
        }
    });
});

//server connection

app.listen(5000,()=>{
    console.log("Server is connected at port 5000...");
});

//Test Api
app.get("/",(req,res)=>{
    res.send("Hello from server");
});
