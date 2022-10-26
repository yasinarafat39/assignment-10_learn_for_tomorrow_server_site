const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const Port = process.env.Port || 5000;

const courses = require("./Data/courses.json");


app.get("/", (req, res) => {
    res.send("Now Server is running")
})

app.get("/courses", (req, res) => {
    res.send(courses);
})


app.listen(Port, () => {
    console.log("Server is running:", Port);
})