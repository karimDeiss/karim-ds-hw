const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());

app.get('https://karim-ds-hw.herokuapp.com/',(req,res) => {
    res.status(200).send("<h1> Full Stack Course </h1>")
})

app.get("https://karim-ds-hw.herokuapp.com/person",(req,res) => {
    const personObject = {
        name : "Hussien",
        age : 19,
        religion : "Athesiast",
        education : null
    };
    res.status(200).json(personObject);
});

app.post("https://karim-ds-hw.herokuapp.com/person/add",(req,res) => {
    const body = req.body;
    res.status(200).json({success : true,message : "Person was added successfully"});
})


app.listen(() => {
     console.log("APP LISTENING");
});