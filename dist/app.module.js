"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const http_error_filter_1 = require("./shared/errorHandler/http-error.filter");
const logging_interceptor_1 = require("./shared/Interceptor/logging.interceptor");
const logInterseptor_service_1 = require("./shared/Interceptor/logInterseptor.service");
const loggerInterseptor_schema_1 = require("./shared/Interceptor/schemas/loggerInterseptor.schema");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL),
            mongoose_1.MongooseModule.forFeature([{ name: 'LogInterseptor', schema: loggerInterseptor_schema_1.LoggingInterceptorSchema }]),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, logInterseptor_service_1.LogInterseptorService,
            {
                provide: core_1.APP_FILTER,
                useClass: http_error_filter_1.HttpErrorFilter,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: logging_interceptor_1.LoggingInterceptor,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map