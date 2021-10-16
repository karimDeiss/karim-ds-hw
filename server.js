const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.status(200).send("<h1> Full Stack Course </h1>")
})

app.get("/person",(req,res) => {
    const personObject = {
        name : "Hussien",
        age : 19,
        religion : "Athesiast",
        education : null
    };
    res.status(200).json(personObject);
});

app.post("/person/add",(req,res) => {
    const body = req.body;
    res.status(200).json({success : true,message : "Person was added successfully"});
})


app.listen(3000,"localhost",() => {
     console.log("APP LISTENING");
})