import { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
import { IUser } from "../users/user.interface";
import { RegistrationStatus } from "./Model/registrationStatus.interface";
import { JwtPayload } from "./Model/jwt-payload.interface";
export declare class AuthService {
    private readonly usersService;
    private readonly userModel;
    constructor(usersService: UsersService, userModel: Model<IUser>);
    register(user: IUser): Promise<RegistrationStatus>;
    createToken(user: any): {
        expiresIn: number;
        accessToken: string;
    };
    validateUser(payload: JwtPayload): Promise<any>;
}
