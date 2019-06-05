import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});
UserSchema.plugin(passportLocalMongoose);

UserSchema.pre('save', function(next) {

    const user = this;
    if (!user.isModified('password')) { return next(); }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }
        bcrypt.hash(user['password'], salt, (error, hash) => {
                if (error) { return next(error); }
                user['password'] = hash;
                next();
            },
        );
    });
});
