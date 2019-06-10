import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {ILocation} from './intefaces/location.interface';
import {UpdateLocationDto} from '../../users/dto/UpdateLocation.dto';

@Injectable()
export class LocationService {

    constructor(@InjectModel('location') private readonly locationModel: Model<ILocation>) {
    }

    public async insert(location: ILocation): Promise<ILocation | null> {
       const loc = new this.locationModel(location);
       return await loc.save();
    }

    public async updateLocation(location: UpdateLocationDto): Promise<ILocation | null> {
        const loc =  await this.locationModel.findByIdAndUpdate(location._id, location).exec();
        return loc;
    }

}
