const express = require("express")
const db = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json());
app.use(cors());


//DataBase connection
db.set("strictQuery", true);
db.connect("mongodb+srv://Roshi-07:7019262795@cluster0.0a27phq.mongodb.net/blogging",)
    .then(() => console.log("MongoDb is connected"))
    .catch((err) => console.log(err));

//Insert Data to DataBase
//API
app.post("/insert", (req, res) => {
    const data = req.body.data;
    console.log(data);

    let conn = db.connection
    conn.collection("blogging_data").insertOne(data, (err) => {
        if (err) {
            console.log("Error");
        }
        else {
            console.log("Inserted Sucessfully");
            res.status(200).send("Sucess");
        }
    });

});

//Creating server
app.listen(4000, () => {
    console.log("Server is Running at port 4000");
})

app.get("/", (req, res) => {
    res.send("Server Running .......");
});