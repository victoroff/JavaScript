const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Config = require('../config/database');
const { use } = require('passport');

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User',userSchema);

module.exports.getUserById = function(id,callback){
    User.findById(id,callback);
}

module.exports.getUsername = function(username,callback){
    const query = {username,callback};
    User.findOne(query,callback);
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            throw err;
        }

        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
                throw err;
            }
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword,hash, (err, isMatch) => {
        if (err) {
            throw err;
        }
        callback(null, isMatch);
    });
}