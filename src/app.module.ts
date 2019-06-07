import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersModule} from './users/users.module';
import {AuthModule} from './auth/auth.module';
import {APP_FILTER, APP_INTERCEPTOR} from '@nestjs/core';
import {HttpErrorFilter} from './shared/errorHandler/http-error.filter';
import {LoggingInterceptor} from './shared/Interceptor/logging.interceptor';
import {LogInterseptorService} from './shared/Interceptor/logInterseptor.service';
import {LoggingInterceptorSchema} from './shared/Interceptor/schemas/loggerInterseptor.schema';

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL),
        MongooseModule.forFeature([{name: 'LogInterseptor', schema: LoggingInterceptorSchema}]),
        UsersModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService, LogInterseptorService,
        {
            provide: APP_FILTER,
            useClass: HttpErrorFilter,
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor,
        },
    ],

})
export class AppModule {
}
