import { Model } from 'mongoose';
import { IUser, IUsersService } from './intefaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AddLocationDto } from './dto/add-location.dto';
import { LocationService } from '../shared/location/location.service';
export declare class UsersService implements IUsersService {
    private readonly userModel;
    private locationService;
    constructor(userModel: Model<IUser>, locationService: LocationService);
    login(credentials: LoginUserDto): Promise<IUser>;
    findByEmail(email: string): Promise<IUser>;
    findById(id: string): Promise<IUser>;
    create(createUserDto: CreateUserDto): Promise<IUser>;
    addLocation(locationDto: AddLocationDto): Promise<IUser>;
    delete(ID: number): Promise<string>;
    findAll(): Promise<IUser[]>;
    findOne(options: object): Promise<IUser>;
    update(id: number, newValue: IUser): Promise<IUser>;
    private compareHash;
}
