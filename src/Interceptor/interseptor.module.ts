import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {LoggingInterceptorSchema} from './schemas/loggerInterseptor.schema';
import {LoggerInterceptorController} from './logger-interceptor.controller';
import {LoggerInterceptorService} from './logger-interseptor.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'LogInterceptor', schema: LoggingInterceptorSchema}]),
    ],
    controllers: [LoggerInterceptorController],
    providers: [LoggerInterceptorService],
    exports: [LoggerInterceptorService],
})
export class LoggerInterceptorModel {
}
