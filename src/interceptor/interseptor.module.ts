import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {LoggerInterceptorSchema} from './schemas/loggerInterseptor.schema';
import {LoggerInterceptorController} from './logger-interceptor.controller';
import {LoggerService} from './logger.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'LogInterceptor', schema: LoggerInterceptorSchema}]),
    ],
    controllers: [LoggerInterceptorController],
    providers: [LoggerService],
    exports: [LoggerService],
})
export class LoggerInterceptorModel {
}
