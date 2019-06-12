import {Body, Controller, Get} from '@nestjs/common';
import {LoggerInterceptorService} from './logger-Interseptor.service';
import {ApiUseTags} from '@nestjs/swagger';

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
