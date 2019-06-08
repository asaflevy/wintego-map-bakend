"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.LocationSchema = new mongoose.Schema({
    type: {
        type: Number,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    region_code: {
        type: String,
        required: true,
    },
});
//# sourceMappingURL=loggerInterseptor.schema.js.map