import { Model } from 'mongoose';
import { ILocation } from './intefaces/location.interface';
export declare class LocationService {
    private readonly locationModel;
    constructor(locationModel: Model<ILocation>);
    insert(location: ILocation): Promise<ILocation | null>;
}
