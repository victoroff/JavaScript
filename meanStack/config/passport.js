const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const Config = require('./database');

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = Config.secret;

    passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
        User.getUserById(jwtPayload.user._id, (err,user) => {
            
            if (err) {
                return done(err,false);
            }
            if (user) {
                return done(null,user);
            }else{
                return done(null,false);
            }

        })
    }));
}