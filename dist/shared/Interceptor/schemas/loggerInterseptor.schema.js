"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.LoggingInterceptorSchema = new mongoose.Schema({
    message: { type: String, required: true },
    ip: { type: String, required: false },
    fkLocation: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
    created_date: { type: 'Date', default: Date.now, required: true },
});
//# sourceMappingURL=loggerInterseptor.schema.js.map