const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const router = express.Router();

router.post('/login',
    passport.authenticate('local'),
    function (req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        res.redirect('/users/' + req.user.username);
    });

module.exports = router