import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema({
    firstName: {type: String, default: null, required: false},
    lastName: {type: String, default: null, required: false},
    email: {type: String, required: true},
    password: {type: String, required: true},
    created_date: {type: 'Date', default: Date.now, required: true},
});

UserSchema.pre('save', function(next) {

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
            },
        );
    });
});
