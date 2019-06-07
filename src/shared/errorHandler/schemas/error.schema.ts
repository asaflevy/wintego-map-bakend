import * as mongoose from 'mongoose';

export const ErrorSchema = new mongoose.Schema({
    status: {type: String, default: null, required: false},
    timestamp: {type: String, default: null, required: false},
    path: {type: String, required: false},
    method: {type: String, required: false},
    message: {type: String, required: false},
    ip: {type: String, required: false},
    created_date: {type: 'Date', default: Date.now, required: true},
});
