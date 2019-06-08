import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { JwtPayload } from './Model/jwt-payload.interface';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UsersService);
    createToken(credentials: LoginUserDto): Promise<{
        expiresIn: number;
        accessToken: string;
    }>;
    validateUser(payload: JwtPayload): Promise<any>;
}
