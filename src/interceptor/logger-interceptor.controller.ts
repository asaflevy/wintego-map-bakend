import {Body, Controller, Get} from '@nestjs/common';

import {ApiUseTags} from '@nestjs/swagger';
import {LoggerService} from './logger.service';

@ApiUseTags('logger')
@Controller('api/logger')
export class LoggerInterceptorController {
    constructor(private loggerService: LoggerService) {
    }

    @Get('getAll')
    async getAll() {
        return await this.loggerService.getAll();
    }
}
