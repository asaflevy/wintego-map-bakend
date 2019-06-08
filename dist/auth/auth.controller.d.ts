import { AuthService } from './auth.service';
import { LoginUserDto } from '../users/dto/login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getToken(credentials: LoginUserDto): Promise<{
        expiresIn: number;
        accessToken: string;
    }>;
}
