const express = require("express");
const users = require("../data/users");
const router = express.Router();


router
    .route("/")
    .get((req, res) => {
        res.json(users); 
    })

router
    .route("/brandnew")
    .post((req, res) => {
        const newUser = {
           id: users.length + 1, 
           name: req.body.name,
           username: req.body.username,
           email: req.body.email
        };
        users.push(newUser);
        res.send(newUser);
        console.log(`Brand new user!`);
    })
router 
    .route("/person")
    .get((req, res) => {
        console.log(req.query);
        return res.json({
            message: "This user is an actual person on Circular!", 
            name: req.query.name,
            age: req.query.age,    
        })
    })
router 
    .route("/:id")
    .delete((req, res, next) => { 
        const user = users.find((p, i) => {
            if (p.id == req.params.id) {
                users.splice(i, 1);
                return true;
            }
        })
        if (user) { res.json({ message: "User has been deleted successfully!", user});
        } else { next();
        }
    });


module.exports = router 