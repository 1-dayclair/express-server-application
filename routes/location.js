const express = require("express");
const location = require("../data/location");
const router = express.Router();

router
    .route ("/")
    .get ((req, res) => {
        res.json(location)
    })
    .post ((req, res) => {

    })
    .put ((req, res) => {

    })
    .delete ((req, res) => {

    })

module.exports = router 