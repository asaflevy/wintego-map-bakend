import { AuthService } from './auth.service';
import { LoginUserDto } from '../users/dto/login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    verify(token: string): Promise<{}>;
    getToken(credentials: LoginUserDto): Promise<{
        expiresIn: number;
        accessToken: string;
    }>;
}
