const express = require("express");
const location = require("../data/location");
const router = express.Router();

router
    .route ("/")
    .get ((req, res) => {
        res.json(location)
    })

module.exports = router 