var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    favoriteFood: {
        type: String,
        required: true
    },
    skill: {
        type: Number,
        required: true
    },
    userImg: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
});

// Hash the password.

userSchema.pre("save", function (next) {
    var user = this;
    if (!user.isModified("password")) {
        return next();
    } else {
        bcrypt.hash(user.password, 10, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    }
});

userSchema.methods.withoutPassword = function () {
    var user = this.toObject();
    delete user.password;
    return user;
}


module.exports = mongoose.model("User", userSchema);
