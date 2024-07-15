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
    .put((req, res) => {
        const update = users.find((p, i) => {
            if (p.id == req.params.id) {
                posts[i][key] = req.body[key]; 
                return true;
            }

        })
        if (update) { res.json({ message: "A new user has been updated!", user});
        } else { next();
        }
        
    })
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