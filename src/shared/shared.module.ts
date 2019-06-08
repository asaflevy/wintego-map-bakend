import {Module} from '@nestjs/common';
import {LocationService} from './location/location.service';
import {MongooseModule} from '@nestjs/mongoose';
import {LocationSchema} from './location/schemas/location.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: 'location', schema: LocationSchema}])],
    controllers: [],
    providers: [LocationService],
    exports: [LocationService],
})
export class SharedModule {
}
