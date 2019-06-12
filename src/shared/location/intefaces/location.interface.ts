import {Document} from 'mongoose';
import {LocationType} from '../../eventType.model';

export interface ILocation extends Document {
    readonly latitude: number;
    readonly longitude: number;
    readonly city?: string;
    readonly region?: string;
    readonly region_code?: string;
    readonly info?: string;
    readonly type?: LocationType;
    readonly iconUrl?: string;
    readonly lable?: string;
}
