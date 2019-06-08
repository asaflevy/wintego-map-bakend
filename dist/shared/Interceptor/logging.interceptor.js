"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const logInterseptor_service_1 = require("./logInterseptor.service");
const location_service_1 = require("../location/location.service");
let LoggingInterceptor = class LoggingInterceptor {
    constructor(logSrv, locationSrv, httpService) {
        this.logSrv = logSrv;
        this.locationSrv = locationSrv;
        this.httpService = httpService;
    }
    intercept(context, call$) {
        const now = Date.now();
        const req = context.switchToHttp().getRequest();
        if (req) {
            const method = req.method;
            const url = req.url;
            return call$.handle().pipe(operators_1.tap(() => __awaiter(this, void 0, void 0, function* () {
                const ip = this.getClientIp(req);
                const locationResult = yield this.httpService.get(`https://ipapi.co/json/`).toPromise();
                const locationDoc = yield this.locationSrv.insert(locationResult.data);
                const logInter = `Interceptor ${method} ${url} ${Date.now() - now}ms`;
                this.logSrv.insert({ message: logInter, ip: ip, fkLocation: locationDoc._id });
                common_1.Logger.log(logInter, context.getClass().name);
            })));
        }
    }
    getClientIp(req) {
        return req.headers['X-Forwarded-For'] || req.connection.remoteAddress;
    }
};
LoggingInterceptor = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [logInterseptor_service_1.LogInterseptorService, location_service_1.LocationService, common_1.HttpService])
], LoggingInterceptor);
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=logging.interceptor.js.map