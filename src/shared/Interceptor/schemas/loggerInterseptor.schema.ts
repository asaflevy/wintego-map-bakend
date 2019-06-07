import * as mongoose from 'mongoose';

export const LoggingInterceptorSchema = new mongoose.Schema({
    message: {type: String, required: true},
    ip: {type: String, required: false},
    created_date: {type: 'Date', default: Date.now, required: true},
});
