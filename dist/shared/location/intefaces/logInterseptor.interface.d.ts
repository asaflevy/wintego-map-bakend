import { Document } from 'mongoose';
export interface ILocation extends Document {
    readonly latitude: string;
    readonly longitude: string;
    readonly city: string;
    readonly region: string;
    readonly region_code: string;
}
