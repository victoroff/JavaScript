const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwtWebToken = require('jsonwebtoken');
const { use } = require('passport');
const Config = require('../config/database');

//Register 
router.post('/register',(req,res,next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        //password is always plain text. Hash it before it goes!!!
        password: req.body.password
    });

    User.addUser(newUser,(err,user) => {
        if (err) {
            res.json({success: false, msg:'Failed to register user.'});
        }else{
            res.json({success: true, msg:'user registered.'});
        }
    });
});

//Authenticate 
router.post('/authenticate',(req,res,next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUsername(username, (err,user) => {
        if (err) {
            throw err;
        }
        if (!user) {
            return res.json({success: false, msg: 'User not found.'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) {
                throw err;
            }

            if (isMatch) {
                //always represent user as object
                const token  = jwtWebToken.sign({user}, Config.secret, {
                    expiresIn: 604800 // 1 week
                });
                
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user.id,
                        name : user.username,
                        email: user.email
                    }
                });
            }else{
                return res.json({
                    success: false,
                    msg: 'Wrong password.'
                });
            }
        });
    })    
});

//Profile 
router.get('/profile', passport.authenticate('jwt', {session:false}), (req,res,next) => {
    res.json({user: req.user});
});

//Validate 
router.get('/validate',(req,res,next) => {
    res.send('validate');
});
module.exports = router;