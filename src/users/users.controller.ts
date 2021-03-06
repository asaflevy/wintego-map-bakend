import {Body, Controller, Delete, Get, Param, Post, Query, Req, UseGuards} from '@nestjs/common';
import {UsersService} from './users.service';
import {AuthGuard} from '@nestjs/passport';
import {AddLocationDto} from './dto/add-location.dto';
import {CreateUserDto} from './dto/user.dto';
import {ApiUseTags} from '@nestjs/swagger';
import {UpdateLocationDto} from './dto/UpdateLocation.dto';
import {AdminRoleGuard} from '../auth/roles/admin.role';

@ApiUseTags('users')
@Controller('api/users')
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

    @Post('updateOrInsertLocation')
    async updateLocation(@Body('updateLocationDto') updateLocationDto: UpdateLocationDto) {
        if (updateLocationDto && updateLocationDto._id) {
            return await this.userSrv.updateLocation(updateLocationDto);
        } else {
            return await this.userSrv.addLocation(updateLocationDto);
        }
    }

    @UseGuards(AdminRoleGuard)
    @UseGuards(AuthGuard())
    @Get('getAllUsers')
    async getAll() {
        return await this.userSrv.findAll();
    }

    @UseGuards(AuthGuard())
    @Get('getUserData/:id')
    async getUserData(@Req() req, @Param('id') userId) {
        return await this.userSrv.findById(userId);
    }

    @UseGuards(AuthGuard())
    @Delete('deleteLocation')
    async deleteLocation(@Req() req, @Query('userId') userId, @Query('locationId') locationId) {
        return await this.userSrv.deleteLocation(userId, locationId);
    }

}
