import {Body, Controller, Get, Param, Post, UseGuards, Req} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {AuthGuard} from '@nestjs/passport';
import {AddLocationDto} from './dto/add-location.dto';
import { AdminRoleGuard } from 'src/auth/roles/admin.role';

@Controller('users')
export class UsersController {
    constructor(private userSrv: UsersService) {
    }

    @Post('register')
    async create(@Body() createDto: CreateUserDto) {
        return await this.userSrv.create(createDto);
    }

    @Post('addLocation')
    async addLocation(@Body() addLocationDto: AddLocationDto) {
        return await this.userSrv.addLocation(addLocationDto);
    }

    @UseGuards(AuthGuard())
    @Get('getAll')
    async getAll() {
        return await this.userSrv.findAll();
    }
    @UseGuards(AdminRoleGuard)
    @Get('getUserData/:id')
    async getUserData(@Req() req, @Param('id') userId) {
        const user = req.user;
        return await this.userSrv.findById(userId);
    }
}
