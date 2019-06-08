"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const loggerInterseptor_schema_1 = require("./schemas/loggerInterseptor.schema");
const logger_interceptor_controller_1 = require("./logger-interceptor.controller");
const logger_Interseptor_service_1 = require("./logger-Interseptor.service");
let LoggerInterceptorModel = class LoggerInterceptorModel {
};
LoggerInterceptorModel = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'LogInterceptor', schema: loggerInterseptor_schema_1.LoggingInterceptorSchema }]),
        ],
        controllers: [logger_interceptor_controller_1.LoggerInterceptorController],
        providers: [logger_Interseptor_service_1.LoggerInterceptorService],
        exports: [logger_Interseptor_service_1.LoggerInterceptorService],
    })
], LoggerInterceptorModel);
exports.LoggerInterceptorModel = LoggerInterceptorModel;
//# sourceMappingURL=interseptor.module.js.map