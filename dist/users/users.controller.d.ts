import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AddLocationDto } from './dto/add-location.dto';
export declare class UsersController {
    private userSrv;
    constructor(userSrv: UsersService);
    create(createDto: CreateUserDto): Promise<import("./intefaces/user.interface").IUser>;
    addLocation(addLocationDto: AddLocationDto): Promise<import("./intefaces/user.interface").IUser>;
    getAll(): Promise<import("./intefaces/user.interface").IUser[]>;
    getUserData(userId: any): Promise<import("./intefaces/user.interface").IUser>;
}
