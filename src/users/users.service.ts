import * as mongoose from 'mongoose';
import {Model} from 'mongoose';
import {forwardRef, Inject, Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {IUser, IUsersService} from './intefaces/user.interface';
import * as bcrypt from 'bcrypt';
import {LoginUserDto} from './dto/login-user.dto';
import {AddLocationDto} from './dto/add-location.dto';
import {LocationService} from '../shared/location/location.service';
import {ILocation} from '../shared/location/intefaces/location.interface';
import {LocationType} from '../shared/eventType.model';
import {CreateUserDto} from './dto/user.dto';
import {UpdateLocationDto} from './dto/UpdateLocation.dto';

@Injectable()
export class UsersService implements IUsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<IUser>,
                @Inject(forwardRef(() => LocationService))
                private locationService: LocationService) {
    }

    public async login(credentials: LoginUserDto): Promise<IUser> {
        const user = await this.findByEmail(credentials.email);
        const match = await this.compareHash(credentials.password, user.password);
        if (!user || !match) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    async findByEmail(email: string): Promise<IUser> {
        return await this.userModel.findOne({email});
    }

    async findById(id: string): Promise<IUser> {
        const userId = mongoose.Types.ObjectId(id);
        return await this.userModel.findById(userId).populate('fkLocation').exec();
    }

    async create(createUserDto: CreateUserDto): Promise<IUser> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async addLocation(locationDto: AddLocationDto): Promise<ILocation> {
        const user = await this.findById(locationDto.userId);
        if (!user) {
            throw Error('User Not Fount');
        }
        const location = await this.locationService.insert({
            latitude: locationDto.latitude,
            longitude: locationDto.longitude,
            info: locationDto.info,
            type: LocationType.User,
            lable: locationDto.lable,
            iconUrl: locationDto.iconUrl,
        } as ILocation);
        const {_id} = location as never;
        user.fkLocation.push(_id);
        await user.save();
        return location;
    }

    async updateLocation(updateLocationDto: UpdateLocationDto): Promise<ILocation> {
        const user = await this.findById(updateLocationDto.userId);
        if (!user) {
            throw Error('User Not Fount');
        }
        return await this.locationService.updateLocation(updateLocationDto);
    }

    async delete(ID: number): Promise<string> {
        try {
            await this.userModel.findByIdAndRemove(ID);
            return 'The user has been deleted';
        } catch (err) {
            return 'The user could not be deleted';
        }
    }

    async findAll(): Promise<IUser[]> {
        return await this.userModel.find().populate('fkLocation').exec();
    }

    async findOne(options: object): Promise<IUser> {
        return await this.userModel.findOne(options).exec();
    }

    async deleteLocation(userId: string, locationId: string): Promise<ILocation> {
        await this.userModel.update(
            {fkLocation: locationId},
            {$pull: {fkLocation: locationId}},
            {multi: true},
        );
        const location  = await this.locationService.findById(locationId);
        await this.locationService.delete(locationId);
        return location;
    }

    async update(id: number, newValue: IUser): Promise<IUser> {
        const user = await this.userModel.findById(id).exec();

        if (!user._id) {
            throw new Error('User not found');
        }

        await this.userModel.findByIdAndUpdate(id, newValue).exec();
        return await this.userModel.findById(id).exec();
    }

    private async compareHash(password: string | undefined, hash: string | undefined): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }

}
