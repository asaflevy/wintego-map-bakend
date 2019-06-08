import { Document } from 'mongoose';
export interface IloggerInterceptor extends Document {
    readonly message: string;
    readonly ip: string;
    readonly fkLocation: string;
}
