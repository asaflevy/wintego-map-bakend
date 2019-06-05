import { UsersService } from '../users/users.service';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { JwtPayload } from './Model/jwt-payload.interface';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UsersService);
    createToken(credentials: LoginUserDto): Promise<{
        expiresIn: number;
        accessToken: string;
    }>;
    verifyToken(token: string): Promise<{}>;
    validateUser(payload: JwtPayload): Promise<any>;
}
