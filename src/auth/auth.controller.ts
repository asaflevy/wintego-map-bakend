import {Body, Controller, Get, Logger, Post, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AuthService} from './auth.service';
import {LoginUserDto} from '../users/dto/login-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('signIn')
    public async getToken(@Body() credentials: LoginUserDto) {
        return await this.authService.createToken(credentials);
    }
}
