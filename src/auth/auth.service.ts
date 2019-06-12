import {JwtService} from '@nestjs/jwt';
import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {LoginUserDto} from '../users/dto/login-user.dto';
import {JwtPayload} from './model/jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        @Inject(forwardRef(() => UsersService)) private readonly userService: UsersService) {
    }

    async createToken(credentials: LoginUserDto) {
        const user = await this.userService.login(credentials);
        const expiresIn = 60 * 60;
        const accessToken = this.jwtService.sign({id: user.id});
        return {
            expiresIn,
            accessToken,
            userId: user.id,
            email: user.email,
            role: user.role,
            firstName: user.firstName,
            lastName: user.lastName,
        };
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.userService.findById(payload.id);
    }
}
