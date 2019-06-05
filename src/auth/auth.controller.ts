import {Body, Controller, Get, Logger, Post, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AuthService} from './auth.service';
import {LoginUserDto} from '../users/dto/login-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Get('verify')
    @UseGuards(AuthGuard())
    public async verify(token: string) {
        Logger.log('test' + token);
        return this.authService.verifyToken(token);
    }

    @Post('token')
    public async getToken(@Body() credentials: LoginUserDto) {
        return await this.authService.createToken(credentials);
    }
}
