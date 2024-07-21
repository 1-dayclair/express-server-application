const express = require("express");

const bodyParser = require("body-parser");

const app = express(); 

app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json({extended: true})); 

// Had an issue with views not loading inside child folder, "server-application". Views only works when inside the root directory. 
// but, Views did initially work when not inside the root directory. 
// const path = require("path");
// app.set("views", path.join(__dirname, ""));
app.set("view engine", "ejs");
app.use("/public", express.static("./public"));
app.use("/public/media", express.static("./public"));

const port = 5500; 

const users = require("./data/users");
const opinions = require("./data/opinions");
const location = require("./data/location");

// Custom Middleware
const status = function(req, res, next) {
    console.log("Quality Request Recieved");
    next();
};

app.use(status);

// Home page route
app.get("/", (req, res) => {
    console.log("Circular!")
    res.render("index.ejs", {text: "CIRCULAR!"});
});

// Custom Middleware
const public = function(req, res, next) {
    console.log("Welcome!");
    next();       
};

app.use(public);

app.get("/public", public, (req, res) => {
    res.send("Welcome to Circular! an application presented by In a Vaccum")
});


const userRouter = require("./routes/users");


const locationRouter = require("./routes/location");
const opinionsRouter = require("./routes/opinions");


app.use("/users", userRouter);


app.use("/location", locationRouter); 
app.use("/opinions", opinionsRouter);

// 404 Middleware
app.use((req, res, next) => {
    next(new error(404, "Resource Not Found"));
  });


// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
  });

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});