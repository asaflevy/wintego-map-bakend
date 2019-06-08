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
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const passport_1 = require("@nestjs/passport");
const add_location_dto_1 = require("./dto/add-location.dto");
const admin_role_1 = require("src/auth/roles/admin.role");
let UsersController = class UsersController {
    constructor(userSrv) {
        this.userSrv = userSrv;
    }
    create(createDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userSrv.create(createDto);
        });
    }
    addLocation(addLocationDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userSrv.addLocation(addLocationDto);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userSrv.findAll();
        });
    }
    getUserData(req, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            return yield this.userSrv.findById(userId);
        });
    }
};
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    common_1.Post('addLocation'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_location_dto_1.AddLocationDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addLocation", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard()),
    common_1.Get('getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAll", null);
__decorate([
    common_1.UseGuards(admin_role_1.AdminRoleGuard),
    common_1.Get('getUserData/:id'),
    __param(0, common_1.Req()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserData", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map