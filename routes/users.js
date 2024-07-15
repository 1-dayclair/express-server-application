const express = require("express");
const users = require("../data/users");
const router = express.Router();


router
    .route("/")
    .get((req, res) => {
        res.json(users); 
    })
    .post((req, res) => {
        const newUser = {
           id: users.length + 1, 
           name: req.body.name,
           username: req.body.username,
           email: req.body.email
        };
        users.push(newUser);
        res.send(newUser);
    })
router 
    .route("/:id")
    .put((req, res) => {
        const update = req.params.id
        
    })
    .delete((req, res, next) => {

    })


module.exports = router 