import {Body, Controller, Get} from '@nestjs/common';

import {ApiUseTags} from '@nestjs/swagger';
import {LoggerInterceptorService} from './logger-interseptor.service';

@ApiUseTags('logger')
@Controller('api/logger')
export class LoggerInterceptorController {
    constructor(private loggerInterceptorSrv: LoggerInterceptorService) {
    }

    @Get('getAll')
    async getAll() {
        return await this.loggerInterceptorSrv.getAll();
    }
}
