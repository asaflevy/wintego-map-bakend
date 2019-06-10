import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LoginUserDto} from '../users/dto/login-user.dto';
import {ApiUseTags} from '@nestjs/swagger';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('signIn')
    public async getToken(@Body() credentials: LoginUserDto) {
        return await this.authService.createToken(credentials);
    }
}
