import * as mongoose from 'mongoose';

export const LoggergInterceptorSchema = new mongoose.Schema({
    message: {type: String, required: true},
    ip: {type: String, required: false},
    fkLocation: {type: mongoose.Schema.Types.ObjectId, ref: 'location', required: true},
    created_date: {type: 'Date', default: Date.now, required: true},
});
