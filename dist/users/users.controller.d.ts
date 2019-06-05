import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class UsersController {
    private userSrv;
    constructor(userSrv: UsersService);
    create(createDto: CreateUserDto): Promise<import("./user.interface").IUser>;
    getAll(): Promise<import("./user.interface").IUser[]>;
}
