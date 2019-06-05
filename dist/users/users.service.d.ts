import { Model } from 'mongoose';
import { IUser, IUsersService } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UsersService implements IUsersService {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    login(credentials: LoginUserDto): Promise<IUser>;
    findByEmail(email: string): Promise<IUser>;
    findById(id: number): Promise<IUser>;
    create(createUserDto: CreateUserDto): Promise<IUser>;
    delete(ID: number): Promise<string>;
    findAll(): Promise<IUser[]>;
    findOne(options: object): Promise<IUser>;
    update(ID: number, newValue: IUser): Promise<IUser>;
    private compareHash;
}
