const express = require("express"); 
const opinions = require("../data/opinions");
const router = express.Router();

router
    .route("/")
    .get ((req, res) => {
        res.json(opinions)
    });

router
    .route("/soapbox/")
    .put ((req, res) => {
        console.log(req.body)
        return res.json({
            id: req.body.id,
            content: req.body.content,
            message: "Updated!"
        });
    });

module.exports = router 