const express = require("express"); 
const bodyParser = require("body-parser");
const opinions = require("../data/opinions");

// const router = express.Router();


const app = express();

app.use(bodyParser.json({extended: true})); 
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

router
    .route("/soapbox")
    .post ((req, res) => {
        const {name, comments} = req.body;
        console.log("Comment written", name, body);

        res.status(200).json({message: "Success!"})
        
        res.send(`New talk from: ${name} saying ${comments}`);
    });

router
    .route("/amend")
    .put ((req, res) => {
        console.log(req.body)
        return res.json({
            id: req.body.id,
            content: req.body.content,
            message: "Updated!"
        });
    });

router
    .route("/")
    .get ((req, res) => {
        res.json(opinions)
    });

module.exports = app;