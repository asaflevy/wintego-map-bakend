import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "./user.schema";
import {PassportModule} from "@nestjs/passport";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
        PassportModule.register({defaultStrategy: 'jwt', session: false})
    ],
    exports: [UsersService, MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {
}
