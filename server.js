const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));

const encodedParser = bodyParser.urlencoded({ extended: false });
let racers = new Array;

app.post("/register", encodedParser, (req, res) => {
    const postReq = req.body;
    racers.push({
        name: postReq.firstName.toString() + " " + postReq.lastName.toString(),
        email: postReq.email,
        password: postReq.password,
        age: postReq.age,
        runLength: postReq.runLength
    });
    res.redirect("registered.html");
});

module.exports = racers;

app.listen(3000);