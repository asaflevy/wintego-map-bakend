import {Document} from 'mongoose';

export interface ILoggingInterceptor extends Document {
    readonly message: string;
    readonly  ip: string;
    readonly created_date: Date;
}
