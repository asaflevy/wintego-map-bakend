import * as mongoose from 'mongoose';
import {LocationType} from '../../eventType.model';

export const LocationSchema = new mongoose.Schema({
    type: {
        type: Number,
        enum: [1, 2],
        default: LocationType.Interceptor,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: false,
    },
    region: {
        type: String,
        required: false,
    },
    region_code: {
        type: String,
        required: false,
    },
    info: {
        type: String,
        required: false,
        default: '',
    },
    created_date: {type: 'Date', default: Date.now, required: true},
});
