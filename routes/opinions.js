const express = require("express"); 
const opinions = require("../data/opinions");
const router = express.Router();

router
    .route("/")
    .get ((req, res) => {
        res.json(opinions)
    })
    .post ((req, res) => {
        const newOpinions = {
            id: opinions.length + 1,
        
        }

    })
    .put ((req, res) => {

    })
    .delete ((req, res) => {
        
    })

module.exports = router 