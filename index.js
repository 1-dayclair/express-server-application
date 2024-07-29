const express = require("express");
const port = 5500; 

const bodyParser = require("body-parser");

const app = express(); 

// Middleware
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json({extended: true})); 
// Middleware^^

// Custom Middleware
const rorschach = function(req, res, next) {
    console.log("Rorscach!");
    next();       
};

app.use(rorschach);
// Custom Middleware^^

// Custom Middleware
const status = function(req, res, next) {
    console.log("Quality Request!");
    next();
};

app.use(status);
// Custom Middleware^^

// Routes
const userRouter = require("./routes/users");
const locationRouter = require("./routes/location");
const opinionsRouter = require("./routes/opinions");

app.use("/users", userRouter);
app.use("/location", locationRouter); 
app.use("/opinions", opinionsRouter);
// Routes^^


// Had an issue with views not loading inside child folder, "server-application". Views only works when inside the root directory. 
// but, Views did initially work when not inside the root directory. 
// const path = require("path");
// app.set("views", path.join(__dirname, ""));
app.set("view engine", "ejs");

app.use("/public", express.static("./public"));
app.use("/public/media", express.static("./public"));

app.use(express.static("public"))
// Views^^

// // Data

// I'm not quite sure if this code is necessary, 
// as a matter of fact, I don't think it is necessary because the code still runs 
// without error. 

// const users = require("./data/users");
// const opinions = require("./data/opinions");
// const location = require("./data/location");   
// // Data^^


// Welcome Page
app.get("/welcome", (req, res) => {
    res.render("welcome.ejs", { text: "Welcome to Circular! an application presented by (In a Vaccum!)"});
    console.log("Welcome to Circular! an application presented by (In a Vaccum!)");
});
// Welcome Page^^


// Home page
app.get("/home", (req, res) => {
    console.log("Circular!")
    res.render("index.ejs", {text: "CIRCULAR!"});
});

// 404 Middleware
app.use((req, res, next) => {
    next(new Error(404, "Resource Not Found"));
  });


// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(500).send("ERROR! Something is not working properly...");
    });

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});