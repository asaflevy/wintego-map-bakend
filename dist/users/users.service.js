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
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const bcrypt = require("bcrypt");
const location_service_1 = require("../shared/location/location.service");
const eventType_model_1 = require("../shared/eventType.model");
const mongoose = require("mongoose");
let UsersService = class UsersService {
    constructor(userModel, locationService) {
        this.userModel = userModel;
        this.locationService = locationService;
    }
    login(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findByEmail(credentials.email);
            const match = yield this.compareHash(credentials.password, user.password);
            if (!user || !match) {
                throw new common_1.NotFoundException('User not found');
            }
            return user;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findOne({ email });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = mongoose.Types.ObjectId(id);
            return yield this.userModel.findById(userId).populate('fkLocation').exec();
        });
    }
    create(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdUser = new this.userModel(createUserDto);
            return yield createdUser.save();
        });
    }
    addLocation(locationDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findById(locationDto.userId);
            if (!user) {
                throw Error('User Not Fount');
            }
            const location = yield this.locationService.insert({
                latitude: locationDto.latitude,
                longitude: locationDto.longitude,
                info: locationDto.info,
                type: eventType_model_1.LocationType.User,
            });
            const { _id } = location;
            user.fkLocation.push(_id);
            return yield user.save();
        });
    }
    delete(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.userModel.findByIdAndRemove(ID);
                return 'The user has been deleted';
            }
            catch (err) {
                return 'The user could not be deleted';
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.find().populate('fkLocation').exec();
        });
    }
    findOne(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findOne(options).exec();
        });
    }
    update(id, newValue) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userModel.findById(id).exec();
            if (!user._id) {
                throw new Error('User not found');
            }
            yield this.userModel.findByIdAndUpdate(id, newValue).exec();
            return yield this.userModel.findById(id).exec();
        });
    }
    compareHash(password, hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return bcrypt.compare(password, hash);
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __param(1, common_1.Inject(common_1.forwardRef(() => location_service_1.LocationService))),
    __metadata("design:paramtypes", [mongoose_1.Model,
        location_service_1.LocationService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map