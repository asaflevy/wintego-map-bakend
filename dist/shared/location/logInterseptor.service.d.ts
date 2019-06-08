import { Model } from 'mongoose';
import { ILocation } from './intefaces/location.interface';
export declare class LogInterseptorService {
    private readonly locationModel;
    constructor(locationModel: Model<ILocation>);
    insert(location: ILocation): Promise<ILocation>;
}
