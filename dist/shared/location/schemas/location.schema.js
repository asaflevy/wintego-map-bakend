"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const eventType_model_1 = require("../../eventType.model");
exports.LocationSchema = new mongoose.Schema({
    type: {
        type: Number,
        enum: [1, 2],
        default: eventType_model_1.LocationType.Interceptor,
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
    created_date: { type: 'Date', default: Date.now, required: true },
});
//# sourceMappingURL=location.schema.js.map