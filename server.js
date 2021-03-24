const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));

const encodedParser = bodyParser.urlencoded({ extended: false });
let racers = new Array;

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/informations", (req, res) => {
    if(req.query.a != null && req.query.a == "true") res.render("admin-informations");
    else res.render("informations");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", encodedParser, (req, res) => {
    const postReq = req.body;
    racers.push({
        name: postReq.firstName.toString() + " " + postReq.lastName.toString(),
        email: postReq.email,
        password: postReq.password,
        age: postReq.age,
        runLength: postReq.runLength
    });
    res.render("registered", { racers });
});

app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(3000);