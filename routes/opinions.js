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
        try{
            const {name, comments} = req.body;
            console.log("Comment written", name, body);

            res.send(`New talk from: ${name} saying ${comments}`);

        }catch (error) {
            console.error("Error!!", error);
            res.status(500).json({error: "SERVER ERROR"});
        }
    });

router
    .route("/amend")
    .put ((req, res) => {
        try{
            console.log(req.body)
            return res.json({
                id: req.body.id,
                content: req.body.content,
                message: "Updated!"
            });
        }catch (error) {
            console.error("Error!!, error");
            res.status(500).json({error: "SERVER ERROR"}); 
        }
    });

router
    .route("/")
    .get ((req, res) => {
        res.json(opinions)
    });

module.exports = app;
module.exports = router;