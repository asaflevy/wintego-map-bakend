import {forwardRef, Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {MongooseModule} from '@nestjs/mongoose';
import {UserSchema} from './schemas/user.schema';
import {PassportModule} from '@nestjs/passport';
import {SharedModule} from '../shared/shared.module';

@Module({
    imports: [
        forwardRef(() => SharedModule),
        MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
        PassportModule.register({defaultStrategy: 'jwt', session: false}),
    ],
    exports: [UsersService, MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {
}
