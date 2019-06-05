"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const bcrypt = require("bcrypt");
exports.UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});
exports.UserSchema.plugin(passportLocalMongoose);
exports.UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user['password'], salt, (error, hash) => {
            if (error) {
                return next(error);
            }
            user['password'] = hash;
            next();
        });
    });
});
//# sourceMappingURL=user.schema.js.map