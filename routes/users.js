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
        const update = req.params.id;
        
        
    })
    .delete((req, res, next) => { 
        const user = users.find((p, i) => {
            if (p.id == req.params.id) {
                users.splice(i, 1);
                return true;
            }
        })
        if (user) res.json(user);
        else next();
    });


module.exports = router 