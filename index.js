const express = require("express");
const app = express(); 


app.set("view engine", "ejs");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json({extended: true})); 

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
    res.send("Circular!")
});

// Custom Middleware
const authentication = function(req, res, next) {
    console.log("Authenticated!");
    next();       
};

const userRouter = require("./routes/users");


const locationRouter = require("./routes/location");
const opinionsRouter = require("./routes/opinions");


app.use("/users", userRouter);


app.use("/location", locationRouter); 
app.use("/opinions", opinionsRouter);

app.get("/public", authentication, (req, res) => {
    res.send("Login/Sign-up or Continue with limited use")
});

app.use(authentication);


// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
  });

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});