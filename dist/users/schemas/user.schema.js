"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
exports.UserSchema = new mongoose.Schema({
    firstName: { type: String, default: null, required: false },
    lastName: { type: String, default: null, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    fkLocation: [{ type: mongoose.Schema.Types.ObjectId, ref: 'location', required: false }],
    created_date: { type: 'Date', default: Date.now, required: true },
});
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