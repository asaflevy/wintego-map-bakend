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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var _a;
const jwt = require("jsonwebtoken");
const mongoose_1 = require("mongoose");
const users_service_1 = require("../users/users.service");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let AuthService = class AuthService {
    constructor(usersService, userModel) {
        this.usersService = usersService;
        this.userModel = userModel;
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let status = { success: true, message: 'user register' };
            yield this.userModel.register(new this.userModel({
                username: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }), user.password, (err) => {
                if (err) {
                    status = { success: false, message: err };
                }
            });
            return status;
        });
    }
    createToken(user) {
        console.log('get the expiration');
        const expiresIn = 3600;
        console.log('sign the token');
        console.log(user);
        const accessToken = jwt.sign({
            id: user.id,
            email: user.username,
            firstname: user.firstName,
            lastname: user.lastName
        }, 'ILovePokemon', { expiresIn });
        console.log('return the token');
        console.log(accessToken);
        return {
            expiresIn,
            accessToken,
        };
    }
    validateUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.findById(payload.id);
        });
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_2.InjectModel('User')),
    __metadata("design:paramtypes", [users_service_1.UsersService, typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map