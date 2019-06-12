import {forwardRef, HttpModule, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersModule} from './users/users.module';
import {AuthModule} from './auth/auth.module';
import {APP_FILTER, APP_INTERCEPTOR} from '@nestjs/core';
import {HttpErrorFilter} from './shared/errorHandler/http-error.filter';
import {LoggerInterceptor} from './interceptor/logger-interceptor.service';
import {LoggerInterceptorModel} from './interceptor/interseptor.module';
import {SharedModule} from './shared/shared.module';

@Module({
    imports: [
        HttpModule,
        MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL),
        UsersModule,
        AuthModule,
        LoggerInterceptorModel,
        forwardRef(() => SharedModule),
    ],
    controllers: [AppController],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpErrorFilter,
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggerInterceptor,
        },
    ],

})
export class AppModule {
}
