import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
export class UsersController {
    constructor(private userSrv: UsersService) {
    }

    @Post()
    async create(@Body() createDto:CreateUserDto){
        return await this.userSrv.create(createDto);
    }

    @Get('getAll')
    async getAll(){
        return await this.userSrv.findAll();
    }
}
