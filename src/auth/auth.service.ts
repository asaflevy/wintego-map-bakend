import * as jwt from 'jsonwebtoken';
import {Model} from 'mongoose';
import {UsersService} from '../users/users.service';
import {Injectable} from "@nestjs/common";
import {IUser} from "../users/user.interface";
import {InjectModel} from "@nestjs/mongoose";
import {RegistrationStatus} from "./Model/registrationStatus.interface";
import {JwtPayload} from "./Model/jwt-payload.interface";

@Injectable()
export class AuthService {

    constructor(private readonly usersService: UsersService,
                @InjectModel('User') private readonly userModel: Model<IUser>) {
    }

    async register(user: IUser) {
        let status: RegistrationStatus = {success: true, message: 'user register'};
        await this.userModel.register(new this.userModel({
            username: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        }), user.password, (err) => {
            if (err) {
                status = {success: false, message: err};
            }
        });
        return status;
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
        }, 'ILovePokemon', {expiresIn});
        console.log('return the token');
        console.log(accessToken);
        return {
            expiresIn,
            accessToken,
        };
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.usersService.findById(payload.id);
    }
}
