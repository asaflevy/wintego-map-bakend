import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import {UserType} from '../intefaces/user.interface';

export const UserSchema = new mongoose.Schema({
    firstName: {type: String, default: null, required: false},
    lastName: {type: String, default: null, required: false},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: Number, default: UserType.User},
    fkLocation: [{type: mongoose.Schema.Types.ObjectId, ref: 'location', required: false}],
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
